import PhoneForm from "components/PhoneForm/PhoneForm";
import FilterContacts from "components/FilterContacts/FilterContacts";
import ContactList from "components/ContactList/ContactList";
import MainContainer from "components/MainContainer/MainContainer";
import "./App.css";

function App() {
  return (
    <>
      <MainContainer>
        <h1>Phonebook</h1>
        <PhoneForm />
        <h2>Contacts:</h2>
        <FilterContacts />
        <ContactList />
      </MainContainer>
    </>
  );
}

export default App;
