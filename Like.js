const { DOM, PropTypes } = React;

const { bind, assign } = _;

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.likes };
    
    this.handleClick = bind(this.handleClick, this);
  }
  
  handleClick() {
    this.setState({ count: this.state.count + 1 })
  }
  
  render() {
    return (
      <div>
        {this.state.count > 0 &&
          <p>Likes: { this.state.count }</p>
        }
      <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
};

Like.defaultProps = {
  likes: 0
}

Like.propTypes = {
  likes: PropTypes.number
}

ReactDOM.render(
  React.createElement(
    Like),
  document.getElementById('app')
);
