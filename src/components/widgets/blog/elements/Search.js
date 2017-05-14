import React, { DOM, PropTypes } from 'react';

import { Input } from 'semantic-ui-react';

const SearchBar = ({ loading, error, startSearch }) => (
  DOM.div(null,
    React.createElement(Input,
      {
        placeholder: 'Search'
        , loading
        , icon: 'search'
        , error
        , onBlur: startSearch
      }
    )
  )
);

SearchBar.defaultProps = {
  loading: false,
  error: false
};

SearchBar.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool
};

export default SearchBar;
