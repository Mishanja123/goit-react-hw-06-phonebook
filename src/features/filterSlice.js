import { createSlice } from "@reduxjs/toolkit";
// import { statusFilters } from "./constants";

const filtersInitialState = {
  filter: '',
};

const filterSlice = createSlice({
    name: "filter",
    initialState: filtersInitialState,
    reducers: {
      setFilter: (state, action) => {
        return action.payload;
      },
    },
  });

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;