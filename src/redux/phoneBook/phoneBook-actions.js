import { createAction } from "@reduxjs/toolkit";

export const setFilterField = createAction("phonebook/filterContacts");
export const fetchContactsRequest = createAction(
  "phonebook/fetchContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "phonebook/fetchContactsSuccess"
);
export const fetchContactsError = createAction("phonebook/fetchContactsError");
export const fetchAddToContactsRequest = createAction(
  "phonebook/fetchAddToContactsRequest"
);
export const fetchAddToContactsSuccess = createAction(
  "phonebook/fetchAddToContactsSuccess"
);
export const fetchAddToContactsError = createAction(
  "phonebook/fetchAddToContactsError"
);
export const fetchDeleteRequest = createAction("phonebook/fetchDeleteRequest");
export const fetchDeleteSuccess = createAction("phonebook/fetchDeleteSuccess");
export const fetchDeleteError = createAction("phonebook/fetchDeleteError");
