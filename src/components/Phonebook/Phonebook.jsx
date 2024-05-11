import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import css from './Phonebook.module.css'

export default function Phonebook() {
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
    

    const addContactHandler = (values, { resetForm }) => {
        const normilizedName = values.name.toLowerCase();
        const sameName = contacts.filter(contact => contact.name.toLowerCase() === normilizedName);
        if (sameName.length > 0) {
            alert(`${sameName[0].name} is already in contacts`);
            return;
        }
        setContacts(prevContacts => [
            ...prevContacts,
            {
                id: nanoid(),
                ...values
            }]);
        resetForm();
    }

    const filterValueHandler = (e) => {
        setFilter(e.target.value);
    }

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
                addContact={addContactHandler}
            />
            <SearchBox filter={filter} onChange={filterValueHandler}/>
            <ContactList contacts={visibleContacts} onClick={deleteContact}/>
        </div>
    );
}