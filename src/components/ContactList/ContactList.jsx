import { useSelector } from "react-redux";
import { getContacts } from "../../redux/selectors";
import { getFilter } from "../../redux/selectors";


import { Filter } from "../Filter/Filter";
import { Contact } from "../Contact/Contact";

import css  from "./ContactList.module.css";



const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact => contact.name.toLowerCase().includes(filter.value.toLowerCase()))
  
}


export const ContactList = () => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <>
      <Filter
      />
      <ul className= {css.contactList}>
        {visibleContacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <Contact
          contact={contact}
          />
        </li>
        ))}
      </ul>
    </>
  );
};