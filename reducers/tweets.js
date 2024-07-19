import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const bookmarksSlice = createSlice({
	name: 'tweets',
	initialState,
	reducers: {
		addTweet: (state, action) => {
			state.value.push(action.payload);
		},
		removeTweet: (state, action) => {
			state.value = state.value.filter(tweet => tweet.title !== action.payload.title);
		},
		
	},
});

export const { addTweet, removeTweet } = TweetsSlice.actions;
export default TweetsSliceSlice.reducer;
