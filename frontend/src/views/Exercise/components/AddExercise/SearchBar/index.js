import { useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * SearchBar component allows users to search and clear it.
 *
 * @param {string} placeholder - Placeholder text for the input field.
 * @param {function} onSearch - function to handle search query changes.
 */
const SearchBar = ({ placeholder = 'Search...', onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="search-input"
        aria-label="Search input"
      />
      {query && (
        <button onClick={clearSearch} className="clear-button">
          <FaTimes />
        </button>
      )}
    </div>
  );
}

// PropTypes validation
SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar