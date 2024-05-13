import css from './SearchBox.module.css'

export default function SearchBox({ filter, setFilter }) {
    return (
        <>
            <input
                className={css.input}
                type="text"
                name='filter'
                placeholder="Filter"
                onChange={setFilter}
                value={filter}
            />
        </>
    );
}