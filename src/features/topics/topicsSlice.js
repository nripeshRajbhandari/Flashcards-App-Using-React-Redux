import { createSlice } from "@reduxjs/toolkit"; 
import { addQuiz } from "../quizzes/quizzesSlice";

export const topicsSlice = createSlice({

    name:'topics',
    initialState: {
        topics:{}
    },
    reducers:{
        addTopic: (state, action) => {
          const newTopic = {
            id: action.payload.id,
            name: action.payload.name,
            icon: action.payload.icon,
            quizIds: []
          };
          state.topics[action.payload.id] = newTopic; 
        }          
    },
    extraReducers: (builder) =>{
        builder
        .addCase(addQuiz,(state,action) => {
            const { id, topicId } = action.payload;
            state.topics[topicId].quizIds.push(id);
        })
    }
});

// selectors
export const selectTopics = (state) => state.topics.topics;

// selector + reducer
export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer ;