/**
 * useCallback
 * 숫자가 바뀌어서 컴포넌트가 리렌더링될 때마다 onIncrease 함수와 onDecrease 함수를 새로 생성하고 있음
 * 이러한 상황을 최적화하기 위해 사용
 */
import React, { useCallback } from "react";
// dispatch를 일일히 붙여주지 않도록 bindActionCreators 사용
/*
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
*/
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

// 컴포넌트를 리덕스와 연동하려면 react-redux에서 제공하는 connect 함수를 사용해야 한다.

/*
const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};
*/
const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

// Hook 사용으로 사용 X
/*
const mapStateToProps = state => ({
  number: state.counter.number
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increase,
      decrease
    },
    dispatch
  );
*/

// 액션 생성 함수를 객체 형태로 넘겨주면 bindActionCreators 보다 더 편리해짐
/**
 * const mapDispatchToProps = {
    increase,
    decrease
  }
 */

//  Hook 사용으로 사용 X
/*
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
*/

// 아래의 방식도 가능
/**
export default connect(
  state => ({
    number: state.counter.number
  }),
  dispatch => ({
    increase: () => {
      dispatch(increase());
    },
    decrease: () => {
      dispatch(decrease());
    }
  })
)(CounterContainer);
 */

export default CounterContainer;
