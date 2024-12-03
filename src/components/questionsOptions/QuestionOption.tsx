import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface QuestionOptionProps {
  answerId: number;
  isSelected: boolean;
  onSelect: (answerId: number) => void;
  optionText: string;
}

const QuestionOption: React.FC<QuestionOptionProps> = ({
  answerId,
  isSelected,
  onSelect,
  optionText,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onSelect(answerId)}
      style={[
        styles.optionContainer,
        isSelected && styles.selectedOption,
      ]}
      testID="option-container"
    >
      <Text style={[styles.optionText, isSelected && styles.selectedText]}>
        {optionText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 5,
    padding: 10,
  },
  optionText: {
    color: '#000',
    fontSize: 16,
  },
  selectedOption: {
    backgroundColor: '#007bff',
  },
  selectedText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default QuestionOption;
