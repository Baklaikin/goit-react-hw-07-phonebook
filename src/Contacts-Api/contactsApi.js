const BASE_URL = "http://localhost:3004";

export const fetchContacts = () => {
  fetch(`${BASE_URL}/contacts`)
    .then((response) => {
      if (!response.ok) {
        return;
      }
      return response.json();
    })
    .catch((error) => console.log(error.message));
};
