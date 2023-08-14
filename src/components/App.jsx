import { Section } from './Section/Section';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactList } from './ContactList/ContactList';


export const App = () => {

    return (
      <>
        <Section title="Phonebook">
          <ContactsForm/>
        </Section>
        
        <Section title="Contacts"> 
          <ContactList/>
        </Section>
      </>
    );
};