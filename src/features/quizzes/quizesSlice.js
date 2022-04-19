import { createSlice } from "@reduxjs/toolkit";
import { addQuizIds } from "../topics/topicsSlice";



export const addQuizForTopicId = (quiz) => {
    const { topicId, id} = quiz
    return (dispatch) => {
        dispatch(addQuiz(quiz))
        dispatch(addQuizIds({topicId: topicId, quizId: id}))
    }
}

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        'addQuiz': (state, action) => {state.quizzes[action.payload.id] = action.payload}
       
    }
})

export const selectQuizzes = state => state.quizzes.quizzes

export const { addQuiz } = quizzesSlice.actions
export const quizzesReducer = quizzesSlice.reducer


