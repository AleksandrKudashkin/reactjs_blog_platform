import React, { DOM, PropTypes } from 'react';

import ReactDOM from 'react-dom';

import c3 from 'c3';

class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.pieChart),
      data: { columns: this.props.columns
             , type: 'pie'
      }
    });
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
