import s from "components/ContactList/ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchAllContacts,
  fetchDelete,
} from "redux/phoneBook/phoneBook-operations";
import { getItems, getFilter } from "redux/phoneBook/phoneBook-selectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
  const filtered = contacts.filter((contact) =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );
  return (
    <ul className={s.list}>
      {filtered.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            {name}: <span className={s.number}>{number}</span>
            <button
              className={s.deleteBtn}
              type="button"
              name="delete"
              onClick={() => dispatch(fetchDelete(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
