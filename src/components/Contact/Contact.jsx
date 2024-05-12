import css from './Contact.module.css';

export default function Contact({name, number, id, onClick}) {
    return (
        <>
            <li className={css.li}>
                <button className={css.button} onClick={() => { onClick(id) }}>
                    Delete
                </button>
                {name}: <span>{number}</span>
            </li>
        </>
    );
}