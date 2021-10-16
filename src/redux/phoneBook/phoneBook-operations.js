import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "redux/phoneBook/phoneBook-actions";
import { fetchContacts } from "../../Contacts-Api/contactsApi";

export const fetchAllContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());
  try {
    const contacts = await fetchContacts();
    console.log(contacts);
    dispatch(fetchContactsSuccess(contacts));
  } catch (error) {
    alert("Ups, thomething whent wrong...");
    dispatch(fetchContactsError("Ups, thomething whent wrong..."));
  }
};

// fetchContacts();
