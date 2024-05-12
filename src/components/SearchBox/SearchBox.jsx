import css from './SearchBox.module.css'

export default function SearchBox({ filter, setFilter }) {
    const filterValueHandler = (e) => {
        setFilter(e.target.value);
    }

    return (
        <>
            <input
                className={css.input}
                type="text"
                name='filter'
                placeholder="Filter"
                onChange={filterValueHandler}
                value={filter}
            />
        </>
    );
}