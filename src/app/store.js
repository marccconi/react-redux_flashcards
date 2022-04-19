import { configureStore } from "@reduxjs/toolkit";
import { cardsReducer } from "../features/cards/cardsSlice";
import { quizzesReducer } from "../features/quizzes/quizesSlice";
import { topicsReducer } from "../features/topics/topicsSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer
  },
});
