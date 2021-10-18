import * as fetchStatus from "redux/phoneBook/phoneBook-actions";
import {
  fetchContacts,
  fetchAddContacts,
  fetchDeleteContact,
} from "../../Contacts-Api/contactsApi";

export const fetchAllContacts = () => async (dispatch) => {
  dispatch(fetchStatus.fetchContactsRequest());
  try {
    const contacts = await fetchContacts();
    dispatch(fetchStatus.fetchContactsSuccess(contacts));
  } catch (error) {
    alert("Ups, thomething whent wrong...");
    dispatch(fetchStatus.fetchContactsError("Ups, thomething whent wrong..."));
  }
};

export const fetchAddContactToDb = (data) => async (dispatch) => {
  dispatch(fetchStatus.fetchAddToContactsRequest());
  try {
    await fetchAddContacts(data);
    dispatch(fetchStatus.fetchAddToContactsSuccess());
    dispatch(fetchAllContacts());
  } catch (error) {
    alert("Ups, thomething whent wrong...");
    dispatch(fetchStatus.fetchAddToContactsError);
  }
};

export const fetchDelete = (id) => async (dispatch) => {
  dispatch(fetchStatus.fetchDeleteRequest());
  try {
    await fetchDeleteContact(id);
    dispatch(fetchStatus.fetchDeleteSuccess());
    dispatch(fetchAllContacts());
  } catch (error) {
    console.log(error);
    alert("Can not delete contact");
    dispatch(fetchStatus.fetchDeleteError());
  }
};
