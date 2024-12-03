import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import QuestionnaireScreen from '../screens/QuestionnaireScreen/QuestionnaireScreen';
import ResultScreen from '../screens/ResultScreen/ResultScreen';

const Stack = createStackNavigator();
export type RootStackParamList = {
    Questionnaire: undefined;
    Result: { riskCategory: string; score: number };
  };
  
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Questionnaire">
        <Stack.Screen component={QuestionnaireScreen} name="Questionnaire" />
        <Stack.Screen component={ResultScreen} name="Result" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
