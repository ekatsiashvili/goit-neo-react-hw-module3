import css from "./SearchBox.module.css";

function SearchBox({ value, onSearch }) {
  return (
    <div className={css.search}>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
