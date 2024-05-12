import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onClick }) {
    return (
        <>
            <h2 className={css.title}>Contacts</h2>
            <ul className={css.list}>
                {contacts.map(({ name, id, number }) => (
                    <Contact key={id} id={id} name={name} number={number} onClick={onClick} />
                ))}
            </ul>
        </>
    );
}