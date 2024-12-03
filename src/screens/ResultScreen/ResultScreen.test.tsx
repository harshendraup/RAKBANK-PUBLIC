import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import ResultScreen from './ResultScreen';

const mockRoute = {
  params: {
    riskCategory: 'Low',
    score: 6,
  },
};

describe('ResultScreen', () => {
  it('renders correctly with low risk category', () => {
    const { getByTestId, getByText } = render(<ResultScreen route={mockRoute} />);

    expect(getByText('Your Risk Profile')).toBeTruthy();
    expect(getByText('Your Risk Profile Score:')).toBeTruthy();
    expect(getByText('6')).toBeTruthy();
    expect(getByText('Low')).toBeTruthy();
    expect(getByText('You prefer safer investments with minimal risk. Consider low-risk assets like bonds or savings accounts.')).toBeTruthy();

    const button = getByText('Get Investment Recommendations');
    expect(button).toBeTruthy();

    const riskCategoryContainer = getByTestId('risk-category-container');
    
    const backgroundColor = riskCategoryContainer.props.style.find((style: any) => style.backgroundColor);
     expect.objectContaining({ backgroundColor: '#28a745' })
  });

  it('fires the button press event', () => {
    const { getByText } = render(<ResultScreen route={mockRoute} />);

    global.alert = jest.fn();

    fireEvent.press(getByText('Get Investment Recommendations'));

    expect(global.alert).toHaveBeenCalledWith('for more details ');
  });

it('renders correct styles for different risk categories', () => {
    let { getByTestId } = render(<ResultScreen route={{ params: { riskCategory: 'High', score: 16 } }} />);
    const highRiskContainer = getByTestId('risk-category-container');
    const highRiskBackgroundColor = highRiskContainer.props.style.find((style: any) => style.backgroundColor);
    expect(highRiskBackgroundColor.backgroundColor).toBe('#dc3545'); 
    ({ getByTestId } = render(<ResultScreen route={{ params: { riskCategory: 'Medium', score: 10 } }} />));
    const mediumRiskContainer = getByTestId('risk-category-container');
    const mediumRiskBackgroundColor = mediumRiskContainer.props.style.find((style: any) => style.backgroundColor);
    expect(mediumRiskBackgroundColor.backgroundColor).toBe('#ffc107');  

    ({ getByTestId } = render(<ResultScreen route={{ params: { riskCategory: 'Low', score: 6 } }} />));
    const lowRiskContainer = getByTestId('risk-category-container');
    const lowRiskBackgroundColor = lowRiskContainer.props.style.find((style: any) => style.backgroundColor);
    expect(lowRiskBackgroundColor.backgroundColor).toBe('#28a745'); 
});

});
