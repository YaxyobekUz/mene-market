import React from "react";
import { formatDate, formatTime } from "../helpers/helpers";

const Messages = ({ messages, currentUserId }) => {
  return (
    <ul className="space-y-6">
      {messages.map((message) => {
        const isCurrentUser = currentUserId === message.userId;

        return (
          <li
            key={message.id}
            className={`flex ${isCurrentUser ? "justify-end" : ""} `}
          >
            <div className="inline-block max-w-[70%] bg-white/5 py-2.5 px-4 rounded-lg space-y-1 max-768:max-w-[90%] max-640:max-w-[96%] max-375:max-w-full">
              <span className="inline-block text-regular-16">
                {message.text}
              </span>

              {/* time */}
              <div className="flex-center gap-1.5 text-[13px] leading-normal">
                <span className="inline-block text-white/50">
                  {formatDate(message.messagedDate)}
                </span>
                <span className="inline-block text-white/50">-</span>
                <span className="inline-block text-white/50">
                  {formatTime(message.messagedDate)}
                </span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Messages;
