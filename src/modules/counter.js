import { createAction, handleActions } from "redux-actions";

// Ducks 패턴 형식으로 작성
// 액션 타입 정의
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수
/*
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
*/
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태
const initialState = {
  number: 0
};

// 리듀서 함수
/*
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      };
    case DECREASE:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}
*/
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 })
  },
  initialState
);

export default counter;

/**
 * 리듀서는 export default, 액션 생성 함수는 export로 내보내줌.
 * export는 여러 개를 내보낼 수 있지만, export default는 단 한 개만 내보낼 수 있다.
 *
 * 불러올 때,
 * import counter, { increase, decrease } from './counter
 * 로 불러와야함
 */
