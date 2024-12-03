import { AnyAction } from 'redux';

const initialState = {
  answers: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  },
};

const questionnaireReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_ANSWER':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionId]: action.payload.answerId,
        },
      };
    case 'RESET_ANSWERS':
      return initialState;
    default:
      return state;
  }
};

export default questionnaireReducer;
