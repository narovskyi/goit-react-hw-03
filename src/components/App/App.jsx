import { useState, useEffect } from "react";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import css from './App.module.css'

export default function App() {
    const [filter, setFilter] = useState('');
    const [contacts, setContacts] = useState(() => {
        const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
        if (parsedContacts) {
            return [...parsedContacts];
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts])

    const deleteContact = (id) => {
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        setContacts(updatedContacts);
    }

    const normilizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normilizedFilter));
    return (
        <div className={css.container}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm
              contacts={contacts}
              setContacts={setContacts}
            />
            <SearchBox filter={filter} setFilter={setFilter}/>
            <ContactList contacts={visibleContacts} onClick={deleteContact}/>
        </div>
    );
}