import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as fetchActions from "redux/phoneBook/phoneBook-actions.js";

const itemsReducer = createReducer([], {
  [fetchActions.fetchContactsSuccess]: (state, action) => {
    return [...action.payload];
  },
  [fetchActions.fetchContactsError]: (state, _) => state,
});

const filterReducer = createReducer("", {
  [fetchActions.setFilterField]: (_, { payload }) => payload,
});

const isLoadingReducer = createReducer(false, {
  [fetchActions.fetchContactsRequest]: () => true,
  [fetchActions.fetchContactsError]: () => false,
  [fetchActions.fetchContactsSuccess]: () => false,
  [fetchActions.fetchAddToContactsRequest]: () => true,
  [fetchActions.fetchAddToContactsError]: () => false,
  [fetchActions.fetchAddToContactsSuccess]: () => false,
  [fetchActions.fetchDeleteRequest]: () => true,
  [fetchActions.fetchDeleteError]: () => false,
  [fetchActions.fetchDeleteSuccess]: () => false,
});

const errorReducer = createReducer(null, {
  [fetchActions.fetchContactsError]: (_, { payload }) => payload,
  [fetchActions.fetchContactsRequest]: (_, { payload }) => null,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
  filter: filterReducer,
});
