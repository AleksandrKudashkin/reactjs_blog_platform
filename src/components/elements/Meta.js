import Helmet from 'react-helmet';
import { DESCRIPTION, KEYWORDS } from 'constants/Meta';
import React, { PropTypes } from 'react';

const Meta = ({ title }) => (
  React.createElement(Helmet, {
    title,
    meta: [
      {
        name: 'description',
        content: DESCRIPTION
      },
      {
        name: 'keywords',
        content: KEYWORDS
      }
    ]
  })
);

Meta.propTypes = {
  title: PropTypes.string
};

export default Meta;
