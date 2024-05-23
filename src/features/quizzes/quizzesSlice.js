import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({

    name:'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const newQuiz = {
                id: action.payload.id,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardIds: []                                
            };
            state.quizzes[action.payload.id] = newQuiz;
        }
    }
});


//selector
export const selectQuizzes = (state) => state.quizzes.quizzes;

//actioncreators and reducer
export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;


