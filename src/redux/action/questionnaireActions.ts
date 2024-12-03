export const setAnswer = (questionId: number, answerId: number) => ({
    type: 'SET_ANSWER',
    payload: { questionId, answerId }
  });
  
  export const resetAnswers = () => ({
    type: 'RESET_ANSWERS'
  });
  