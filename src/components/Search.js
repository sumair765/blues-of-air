import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleChange }) => (
  <div className="search">
    <form>
      <input type="text" placeholder="Search" onChange={handleChange} />
    </form>
  </div>
);

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
export default Search;
