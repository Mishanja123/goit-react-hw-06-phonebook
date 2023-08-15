import { useSelector } from "react-redux";
import { getContacts } from "../../features/selectors";
import { getFilter } from "../../features/selectors";


import { Filter } from "../Filter/Filter";
import { Contact } from "../Contact/Contact";

import css  from "./ContactList.module.css";



const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact => contact.name.toLowerCase().includes(filter.value.toLowerCase()))
  
}
// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter(task => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter(task => task.completed);
//     default:
//       return tasks;
//   }
// };
// const filteredContacts = contacts.filter((contact) =>
// contact.name.toLowerCase().includes(filter.toLowerCase())
// );


export const ContactList = () => {

  const contacts = useSelector(getContacts);
  console.log("test", contacts);
  const filter = useSelector(getFilter);
  console.log("test",filter)
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