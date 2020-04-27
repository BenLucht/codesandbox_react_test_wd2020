import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'quiz',
  initialState: {
    questions: null,
    score: 0,
  },
  reducers: {
    addQuestions: (state, action) => {
      // console.log(action.payload);
      state.questions = action.payload;
      // console.log(state.questions);
    },
    clearQuestions: (state) => {
      state.questions = null;
    },
    incrementScore: state => {
      state.score += 1;
    },
    decrementScore: state => {
      state.score -= 1;
    },
    incrementScoreByAmount: (state, action) => {
      state.score += action.payload;
    },
  },
});

export const { addQuestions, clearQuestions, incrementScore, decrementScore, incrementScoreByAmount } = slice.actions;

export const addQuestionsAsync = () => dispatch => {
    dispatch(clearQuestions());
    fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
        .then(response => response.json())
        .then(res => dispatch(addQuestions(res.results)));
  };

export const selectScore = state => state.quiz.score;
export const selectQuestions = state => state.quiz.questions;

export default slice.reducer;
