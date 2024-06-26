import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

// axios
import axiosConfig from "../api/axios/axios";

// components
import Messages from "../components/Messages";
import DotsLoader from "../components/DotsLoader";

// helpers
import { getElement, errorNotification } from "../helpers/helpers";

// images
import send from "../assets/images/svg/send.svg";
import loaderIcon from "../assets/images/svg/loader.svg";
import reloadIcon from "../assets/images/svg/reload.svg";
import arrowLeft from "../assets/images/svg/arrow-left.svg";

const Appeal = () => {
  const { appealId } = useParams();
  const [msg, setMsg] = useState("");
  const messagesWrapperRef = useRef(null);
  const [loader, setLoader] = useState(true);
  const [messages, setMessages] = useState([]);
  const [loader2, setLoader2] = useState(false);
  const userData = useSelector((store) => store.userData);

  const getAppeal = () => {
    setLoader(true);

    axiosConfig
      .get("/Chat/ById?id=" + appealId)
      .then((res) => {
        if (res.status === 200) {
          setMessages(res.data.chatMessages);
        } else errorNotification();
      })
      .catch((err) => {
        console.log("err" + err);
      })
      .finally(() => setLoader(false));
  };
  useEffect(() => getAppeal(), []);

  // send a messages to administrators
  const sendMessage = (e) => {
    e.preventDefault();
    const input = getElement(e, "input");

    if (!loader2 && !loader && msg.length > 0) {
      setLoader2(true);

      const formData = {
        text: msg,
        chatId: appealId,
        userId: userData.userData.userId,
        messagedDate: "2024-06-25T03:12:08.770Z",
      };

      axiosConfig
        .post("/Message", formData)
        .then((res) => {
          setMsg("");
          input.value = "";
          setMessages([...messages, res.data]);

          // scroll to bottom
          const messagesWrapperHeight =
            messagesWrapperRef.current.querySelector("ul").offsetHeight;

          messagesWrapperRef.current.scrollTo({
            top: messagesWrapperHeight,
          });
        })
        .finally(() => setLoader2(false));
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-24px)] pb-6 max-1024:h-[calc(100vh-180px)] max-640:h-[calc(100vh-164px)] max-450:h-[calc(100vh-140px)]">
      {/* header */}
      <div className="admin-page-header max-1024:mb-5 max-450:mb-4">
        {/* back */}
        <Link to="/admin/dashboard/appeals">
          <img
            width={24}
            height={24}
            src={arrowLeft}
            className="w-6 h-6"
            alt="arrow left icon"
          />
        </Link>

        {/* title */}
        <h1>Murojaat</h1>
      </div>

      {/* messages */}
      <div
        ref={messagesWrapperRef}
        className="admin-page-body h-full overflow-y-auto scroll_blue mb-6 max-1024:mb-5 max-450:mb-4"
      >
        {!loader ? (
          messages && messages.length > 0 ? (
            <Messages
              messages={messages}
              currentUserId={userData.userData.userId}
            />
          ) : (
            <div className="text-center text-regular-16 text-primary-gray-500">
              Hozircha hech qanday xabarlar mavjud emas!
            </div>
          )
        ) : (
          <div className="flex-center justify-center w-full h-full">
            <DotsLoader />
          </div>
        )}
      </div>

      {/* send a message */}
      <div className="admin-page-body flex gap-6 w-full max-1024:gap-5 max-450:gap-4">
        {/* reload btn */}
        <button
          disabled={loader}
          onClick={getAppeal}
          className="flex-center justify-center w-9 h-9 shrink-0 bg-linear-gradient_blue-500 rounded-lg"
        >
          <img
            width={20}
            height={20}
            src={reloadIcon}
            alt="loader icon"
            className="w-5 h-5"
          />
        </button>

        {/* form */}
        <form onSubmit={sendMessage} className="flex gap-6 w-full">
          <input
            autoFocus
            type="text"
            maxLength={240}
            disabled={loader}
            className="h-9 rounded-lg"
            placeholder="Xabar yuborish..."
            onChange={(e) => setMsg(e.target.value.trim().slice(0, 240))}
          />

          {/* submit btn */}
          <button
            disabled={loader || loader2}
            className="flex-center justify-center w-9 h-9 shrink-0 bg-linear-gradient_blue-500 rounded-lg"
          >
            {!loader2 ? (
              <img
                src={send}
                width={24}
                height={24}
                className="w-6 h-6"
                alt="send a message icon"
              />
            ) : (
              <img
                width={24}
                height={24}
                src={loaderIcon}
                alt="loader icon"
                className="w-6 h-6 animate-spin"
              />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appeal;
