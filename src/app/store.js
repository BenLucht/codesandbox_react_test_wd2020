import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import quizSlice from '../components/quiz/quizSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    quiz: quizSlice,
  },
});
