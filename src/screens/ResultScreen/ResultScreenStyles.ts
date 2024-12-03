import { StyleSheet } from 'react-native';

export const resultScreenStyles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  highRisk: {
    backgroundColor: '#dc3545', // Red for high risk
  },
  lowRisk: {
    backgroundColor: '#28a745', // Green for low risk
  },
  mediumRisk: {
    backgroundColor: '#ffc107', // Yellow for medium risk
  },
  resultContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  riskCategoryContainer: {
    borderRadius: 50,
    marginVertical: 10,
    paddingHorizontal: 40,
    paddingVertical: 12,
  },
  riskCategoryText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  riskMessage: {
    color: '#666',
    fontSize: 16,
    marginBottom: 30,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  score: {
    color: '#007BFF',
    fontSize: 48,
    fontWeight: 'bold',
  },
  scoreLabel: {
    color: '#666',
    fontSize: 18,
  },
  title: {
    color: '#333',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
