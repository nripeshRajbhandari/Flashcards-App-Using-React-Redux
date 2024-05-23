import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state,action) => {

           //new card object created 
            const newCard = {
                id : action.payload.id,
                front: action.payload.front,
                back: action.payload.back
            };

            //add new object to the current state
            state.cards[action.payload.id] = newCard;
        }
    }
    
});


//selector
export const selectCards = (state) => state.cards.cards;

// action creators + reducer
export const { addCard } = cardsSlice.actions;

export default cardsSlice.reducer;
