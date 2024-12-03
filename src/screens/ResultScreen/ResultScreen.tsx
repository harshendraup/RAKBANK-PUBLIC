import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { resultScreenStyles } from './ResultScreenStyles';

interface ResultScreenProps {
  route: {
    params: {
      riskCategory: string;
      score: number;
    };
  };
}

const ResultScreen: React.FC<ResultScreenProps> = ({ route }) => {
  const { riskCategory, score } = route.params;

  const getRiskCategoryStyle = (category: string) => {
    switch (category) {
      case 'High':
        return resultScreenStyles.highRisk;
      case 'Low':
        return resultScreenStyles.lowRisk;
      case 'Medium':
        return resultScreenStyles.mediumRisk;
      default:
        return resultScreenStyles.lowRisk;
    }
  };

  const getRiskMessage = (category: string) => {
    switch (category) {
      case 'High':
        return 'You are comfortable with high-risk investments. You might consider aggressive stock strategies or emerging markets.';
      case 'Low':
        return 'You prefer safer investments with minimal risk. Consider low-risk assets like bonds or savings accounts.';
      case 'Medium':
        return 'You have a balanced approach towards risk. You may want to explore a mix of stocks and bonds.';
      default:
        return '';
    }
  };

  return (
    <View style={resultScreenStyles.container}>
      <Text style={resultScreenStyles.title}>Your Risk Profile</Text>
      
      <View style={resultScreenStyles.resultContainer}>
        <Text style={resultScreenStyles.scoreLabel}>Your Risk Profile Score:</Text>
        <Text style={resultScreenStyles.score}>{score}</Text>
      </View>

      <View 
        style={[resultScreenStyles.riskCategoryContainer, getRiskCategoryStyle(riskCategory)]}
        testID="risk-category-container" 
      >
        <Text style={resultScreenStyles.riskCategoryText}>{riskCategory}</Text>
      </View>

      <Text style={resultScreenStyles.riskMessage}>{getRiskMessage(riskCategory)}</Text>

      <TouchableOpacity onPress={() => alert('for more details ')} style={resultScreenStyles.button}>
        <Text style={resultScreenStyles.buttonText}>Get Investment Recommendations</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultScreen;
