import { PropTypes, DOM } from 'react';
import { formatDate } from 'helpers/formatDate';

const MetaInfo = ({ author, createdAt }) => (
  DOM.p(null,
        `Author: ${author} | Created: ${formatDate(createdAt)}`
       )
);

MetaInfo.defaultProps = {
  author: 'John Smith',
  createdAt: '01/01/2017',
};

MetaInfo.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.string,
};

export default MetaInfo;
