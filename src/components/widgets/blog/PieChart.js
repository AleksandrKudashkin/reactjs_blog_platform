import React, { DOM, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class PieChart extends React.Component {
  componentDidMount() {
    if(__CLIENT__) {
      const c3 = require('c3');
      this.chart = c3.generate({
        bindto: ReactDOM.findDOMNode(this.refs.pieChart),
        data: { columns: this.props.columns
               , type: 'pie'
        }
      });
    }
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    this.chart.load(nextProps);
  }

  render() {
    return DOM.div({ ref: 'pieChart' });
  }
}

PieChart.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.array)
};

export default PieChart;
