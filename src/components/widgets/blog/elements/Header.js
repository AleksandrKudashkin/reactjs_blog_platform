import React, { PropTypes } from 'react';
import { Header } from 'semantic-ui-react';

const HeaderItem = ({ children }) => (
  <div>
    <Header size='medium'> { children } </Header>
  </div>
);

HeaderItem.defaultProps = {
  children: 'Default lorem ipsum dolor sit amet'
};

HeaderItem.propTypes = {
  children: PropTypes.string
};

export default HeaderItem;
