import { PropTypes, DOM } from 'react';

const MetaInfo = ({ author, createdAt, updatedAt }) => (
  DOM.p(null,
        `Author: ${author} | Created: ${createdAt} | Last Update: ${updatedAt}`
       )
);

MetaInfo.defaultProps = {
  author: 'John Smith',
  createdAt: '01/01/2017',
  updatedAt: '02/01/2017'
};

MetaInfo.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  id: PropTypes.number
};

export default MetaInfo;
