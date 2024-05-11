import css from './SearchBox.module.css'

export default function Filter({ filter, onChange }) {
    return (
        <>
            <input
                className={css.input}
                type="text"
                name='filter'
                placeholder="Filter"
                onChange={onChange}
                value={filter}
            />
        </>
    );
}