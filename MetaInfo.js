const { DOM, PropTypes } = React;

const { bind, assign } = _;

const MetaInfo = ({ id, author, createdAt, updatedAt }) => (
  DOM.p(null, 
        `Id: ${id} | Author: ${author} | Created: ${createdAt} | Last Update: ${updatedAt}`
       )
);

MetaInfo.defaultProps = {
  author: 'John Smith',
  createdAt: '01/01/2017',
  updatedAt: '02/01/2017',
  id: 0
};

MetaInfo.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  id: PropTypes.number
}

ReactDOM.render(
  React.createElement(
    MetaInfo
    , {
      id: 1,
      author: 'Jimmy',
      createdAt: moment('2017-01-01', 'YYYY-MM-DD').calendar(),
      updatedAt: moment('2017-01-02', 'YYYY-MM-DD').calendar()
    }
  ),
  document.getElementById('app')
);