import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Question from '../../components/questions/Question';
import { setAnswer } from '../../redux/action/questionnaireActions';
import { calculateRiskProfileScore } from '../../utils/scoringLogic';
import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Questionnaire: undefined; 
  Result: { riskCategory: string; score: number }; 
};

type QuestionnaireScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Questionnaire'>;

interface Props {
  navigation: QuestionnaireScreenNavigationProp;
}

const QuestionnaireScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const answers = useSelector(state => state.answers);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const totalQuestions = 5; 
  
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const { riskCategory, score } = calculateRiskProfileScore(answers);
      navigation.navigate('Result', { riskCategory, score });
    }
  };

  const questionData = [
    { id: 1, options: ['Novice', 'Intermediate', 'Advanced'], text: "How would you describe your investment knowledge?" },
    { id: 2, options: ['Short-term', 'Medium-term', 'Long-term'], text: "Investment Duration" },
    { id: 3, options: ['Very risk-averse', 'Somewhat risk-averse', 'Neutral', 'Somewhat risk-tolerant', 'Very risk-tolerant'], text: "How comfortable are you with taking risks?" },
    { id: 4, options: ['Less than 10%', '10-25%', '25-50%', 'More than 50%'], text: "What percentage of your income are you willing to invest?" },
    { id: 5, options: ['Panic and sell immediately', 'Monitor closely and consider selling', 'Hold and wait for recovery', 'See it as a buying opportunity and invest more'], text: "How would you react to a sudden drop in the value of your investments?" }
  ];
  
  const currentQuestion = questionData[currentQuestionIndex];
  
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
      <View style={styles.container}>
        <TouchableOpacity
          disabled={currentQuestionIndex === 0}
          onPress={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <Question 
          options={currentQuestion.options}
          questionId={currentQuestion.id}
          questionText={currentQuestion.text}
        />
        
        <TouchableOpacity
          disabled={!answers[currentQuestion.id]} 
          onPress={handleNext}
          style={[styles.nextButton, !answers[currentQuestion.id] && styles.disabledButton]}
        >
          <Text style={styles.nextButtonText}>
            {currentQuestionIndex === totalQuestions - 1 ? "Finish" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    elevation: 5,
    left: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    top: 30,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  disabledButton: {
    backgroundColor: '#d3d3d3',
  },
  nextButton: {
    alignItems: 'center',
    backgroundColor: '#007BFF',
    borderRadius: 8,
    elevation: 5,
    justifyContent: 'center',
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 14,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default QuestionnaireScreen;
