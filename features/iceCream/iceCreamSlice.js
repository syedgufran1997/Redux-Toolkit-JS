const { cakeActions } = require("../cake/cakeSlice");
const createSlice = require("@reduxjs/toolkit").createSlice;
const initialState = {
  numOfIceCreams: 10,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, actions) => {
      state.numOfIceCreams += actions.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIceCreams--;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
