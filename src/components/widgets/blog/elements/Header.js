import React, { DOM, PropTypes } from 'react';
import { Header } from 'semantic-ui-react';

const HeaderItem = ({ children }) => (
  DOM.div(null,
    React.createElement(Header,
      {
        size: 'medium'
        , children
      }
    )
  )
);

HeaderItem.defaultProps = {
  children: 'Default lorem ipsum dolor sit amet'
};

HeaderItem.propTypes = {
  children: PropTypes.object
};

export default HeaderItem;
