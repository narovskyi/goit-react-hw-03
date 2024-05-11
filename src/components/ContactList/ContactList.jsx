import css from './ContactList.module.css';

export default function ContactList({ contacts, onClick }) {
    return (
        <>
            <h2 className={css.title}>Contacts</h2>
            <ul className={css.list}>
                {contacts.map(({ name, id, number }) => (
                    <li className={css.li} key={id}>
                        <button className={css.button} onClick={() => { onClick(id) }}>
                            Delete
                        </button>
                        {name}: <span>{number}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}