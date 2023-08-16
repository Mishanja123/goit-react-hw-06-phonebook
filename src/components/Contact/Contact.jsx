import { deleteContact } from "redux/contactsSlice";
import { useDispatch } from "react-redux";

import css from './Contact.module.css';


export const Contact = ({contact}) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(contact.id));


    return (
        <>
            <p>{contact.name}: {contact.number}</p>
            <button type="button"  className={css.deleteBtn} onClick={handleDelete}>Delete</button>
        </>
    );
};