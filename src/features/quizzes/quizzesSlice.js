import { createSlice } from "@reduxjs/toolkit";
import { addCard } from "../cards/cardsSlice";

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
                cardIds: action.payload.cardIds                               
            };
            state.quizzes[action.payload.id] = newQuiz;
        }
    },
    // extraReducers: (builder) =>{
    //     builder
    //     .addCase(addCard,(state,action) => {
            
            
    //     })
    // }
});


//selector
export const selectQuizzes = (state) => state.quizzes.quizzes;

//actioncreators and reducer
export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;


