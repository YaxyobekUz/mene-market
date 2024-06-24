import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  data: {
    alt: null,
    images: [],
    initialSlide: 0,
  },
  isOpen: false,
};

export const imageViewerModalSlice = createSlice({
  name: "image viewer modal",
  initialState: initialStateValues,
  reducers: {
    setImageViewerModalData: (state, action) => {
      state.data = action.payload;
    },

    setOpenImageViewerModal: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setImageViewerModalData, setOpenImageViewerModal } =
  imageViewerModalSlice.actions;

export default imageViewerModalSlice.reducer;
