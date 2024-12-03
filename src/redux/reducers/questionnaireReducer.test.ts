import questionnaireReducer from './questionnaireReducer';
import { AnyAction } from 'redux';


const setAnswerAction = (questionId: number, answerId: number): AnyAction => ({
  type: 'SET_ANSWER',
  payload: { questionId, answerId },
});

const resetAnswersAction = (): AnyAction => ({
  type: 'RESET_ANSWERS',
});

describe('questionnaireReducer', () => {
  it('should return the initial state when no action is provided', () => {
    const initialState = {
      answers: {
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
      },
    };

    const result = questionnaireReducer(undefined, {} as AnyAction);
    expect(result).toEqual(initialState);
  });

  it('should handle SET_ANSWER action', () => {
    const stateBefore = {
      answers: {
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
      },
    };

    const action = setAnswerAction(1, 42);  
    const expectedState = {
      answers: {
        1: 42,
        2: null,
        3: null,
        4: null,
        5: null,
      },
    };

    const result = questionnaireReducer(stateBefore, action);
    expect(result).toEqual(expectedState);
  });

  it('should handle RESET_ANSWERS action', () => {
    const stateBefore = {
      answers: {
        1: 42,
        2: 34,
        3: null,
        4: null,
        5: null,
      },
    };

    const action = resetAnswersAction();
    const expectedState = {
      answers: {
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
      },
    };

    const result = questionnaireReducer(stateBefore, action);
    expect(result).toEqual(expectedState);
  });
});
