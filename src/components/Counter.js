import {Component} from 'react'

import { useSelector, useDispatch } from 'react-redux';

import {counterAction} from '../store/CounterSlice'
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter)
  const incrementHandelr = () => { 
    dispatch(counterAction.increment());
  };
  const increasetHandelr = () => { 
    dispatch(counterAction.increase(100));
  };
  const decrementHandelr = () => { 
    dispatch(counterAction.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandelr}>Increment</button>
        <button onClick={increasetHandelr}>Increse by 100</button>
        <button onClick={decrementHandelr}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};



// class Counter extends Component{
//   incrementHandelr() {
//     this.props.increment();
//   };
//   decrementHandelr() {
//     this.props.decrement();
//   };
//   toggleCounterHandler() {
    
//   };
//   render() {
//     return (
      
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.incrementHandelr.bind(this)}>Increment</button>
//         <button onClick={this.decrementHandelr.bind(this)}>Decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//     )
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     counter : state.counter
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//     }
// }

export default Counter;
