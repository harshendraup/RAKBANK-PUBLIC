import { fireEvent, render } from '@testing-library/react-native';  
import React from 'react';

import QuestionOption from './QuestionOption';

describe('QuestionOption', () => {
  const mockOnSelect = jest.fn();

  it('renders the option text correctly', () => {
    const { getByText } = render(
      <QuestionOption
        answerId={1}
        isSelected={false}
        onSelect={mockOnSelect}
        optionText="Option 1"
      />,
    );

    
    expect(getByText('Option 1')).toBeTruthy();
  });

  it('calls onSelect when clicked', () => {
    const { getByTestId } = render(
      <QuestionOption
        answerId={1}
        isSelected={false}
        onSelect={mockOnSelect}
        optionText="Option 1"
      />,
    );

    const option = getByTestId('option-container');

    fireEvent.press(option);

    expect(mockOnSelect).toHaveBeenCalledWith(1);
  });

  it('applies selected styles when isSelected is true', () => {
    const { getByText } = render(
      <QuestionOption
        answerId={1}
        isSelected={true}
        onSelect={mockOnSelect}
        optionText="Option 1"
      />,
    );

    const optionText = getByText('Option 1');
    expect(optionText.props.style).toContainEqual({
      color: '#fff',
      fontWeight: 'bold',
    });
  });

  it('does not apply selected styles when isSelected is false', () => {
    const { getByText } = render(
      <QuestionOption
        answerId={1}
        isSelected={false}
        onSelect={mockOnSelect}
        optionText="Option 1"
      />,
    );

    const optionText = getByText('Option 1');
    expect(optionText.props.style).not.toContainEqual({
      color: '#fff',
      fontWeight: 'bold',
    });
  });
});
