import { calculateRiskProfileScore } from '../utils/scoringLogic';

test('calculates risk profile score correctly', () => {
  const answers = {
    1: 3,
    2: 2,
    3: 4,
    4: 3,
    5: 4,
  };

  const { score, riskCategory } = calculateRiskProfileScore(answers);

  expect(score).toBe(16); // Example score
  expect(riskCategory).toBe('Medium');
});
