export const calculateRiskProfileScore = (answers: { [key: number]: number }) => {
    const scoring = {
      1: [1, 2, 3], 
      2: [1, 2, 3], 
      3: [1, 2, 3, 4, 5], 
      4: [1, 2, 3, 4], 
      5: [1, 2, 3, 4], 
    };
  
    const score = Object.keys(answers).reduce((acc, questionId) => {
      const answerScore = scoring[parseInt(questionId)]?.[answers[parseInt(questionId)] - 1] || 0;
      return acc + answerScore;
    }, 0);
  
    let riskCategory = 'Low';
    if (score >= 12) riskCategory = 'Medium';
    if (score >= 18) riskCategory = 'High';
  
    return { score, riskCategory };
  };
  