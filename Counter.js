import React from 'react';
import { connect } from 'react-redux'
import { increment, decrement, incrementFive, decrementFive } from './redux/actions'


class Counter extends React.Component { 
  state = { count: 0 }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
        <button onClick={() => {this.props.decrement(5)}}>-5</button>
          <button onClick={() => {this.props.decrement(1)}}>-</button>
          <span>{this.props.count}</span>
          <button onClick={() => {this.props.increment(1)}}>+</button>
          <button onClick={() => {this.props.increment(5)}}>+5</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = {
  increment: increment,
  decrement: decrement,
}

export default connect(
mapStateToProps,
mapDispatchToProps,
)(Counter);