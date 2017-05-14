import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import {
  Button,
  Segment,
  Header,
  Divider,
  Container,
  Grid,
} from 'semantic-ui-react';

import Link from 'components/elements/Link';
import history from 'helpers/history';

const MainLayout = ({ children }) => (
  React.createElement(Container, {},
    React.createElement(Logo),
    React.createElement(GoBackButton),
    React.createElement(Divider, { hidden: true }),
    children,
    React.createElement(Footer),
    React.createElement(Helmet, {
      defaultTitle: 'ReactJS Blog'
    })
  )
);

MainLayout.propTypes = {
  children: PropTypes.node
};

const Logo = () => (
  React.createElement(Segment, {},
    React.createElement(Header, {},
      React.createElement(Grid, { columns: 2 },
        React.createElement(Grid.Column, { width: 3 },
          React.createElement(Link,
            { to: '/' },
            'Thinknetica Blog'
          )
        ),
        React.createElement(Grid.Column, { width: 8 },
          React.createElement(Link,
            { to: '/about' },
            'About'
          )
        )
      )
    )
  )
);

const Footer = () => (
  React.createElement(Segment,
    {},
    'Powered by React Course.'
  )
);

export default MainLayout;

const GoBackButton = () => (
  React.createElement(Button,
    { onClick: () => history.goBack() },
    'Back'
  )
);
