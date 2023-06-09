import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 0,
  status: 'idle',
  name: ""
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.name = `Value increasing by ${1}`
    },
    decrement: (state) => {
      state.value -= 1;
      state.name = `Value decreasing by ${1}`
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      state.name = `Value increased by ${action.payload}`;
    },
  },
  extraReducers: (builder) => {
    
    // builder
    //   .addCase(incrementAsync.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(incrementAsync.fulfilled, (state, action) => {
    //     state.status = 'idle';
    //     state.value += action.payload;
    //   });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;
