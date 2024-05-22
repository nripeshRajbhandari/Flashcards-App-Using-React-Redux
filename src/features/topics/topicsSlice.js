import { createSlice } from "@reduxjs/toolkit"; 

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
    }

});

// selectors
export const selectTopics = (state) => state.topics.topics;

// selector + reducer
export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer ;