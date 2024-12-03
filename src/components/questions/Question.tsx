import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../../redux/action/questionnaireActions';
import QuestionOption from '../questionsOptions/QuestionOption'

interface QuestionProps {
  options: string[];
  questionId: number;
  questionText: string;
}

const Question: React.FC<QuestionProps> = ({ questionId, questionText, options }) => {
  const dispatch = useDispatch();
  const selectedAnswer = useSelector((state: any) => state.answers[questionId]);

  const handleSelectOption = (answerId: number) => {
    dispatch(setAnswer(questionId, answerId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{questionText}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <QuestionOption
            answerId={index + 1}
            isSelected={selectedAnswer === index + 1}
            key={index}
            onSelect={handleSelectOption}
            optionText={option}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
  },
  optionsContainer: {
    marginTop: 10,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Question;
