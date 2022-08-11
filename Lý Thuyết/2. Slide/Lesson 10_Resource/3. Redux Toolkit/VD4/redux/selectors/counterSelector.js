import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

/** Selector **/
const counterSelector = (state) => state.counter;
const selectCounterSelector = createSelector(
    counterSelector,
    state => state);

/** function */
const selectCounter = () => {
    return selectCounterSelector(store.getState());
}

export default selectCounter;

