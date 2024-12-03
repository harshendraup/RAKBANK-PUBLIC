import { createStore } from 'redux';
import questionnaireReducer from './reducers/questionnaireReducer';

export type RootState = {
  answers: ReturnType<typeof questionnaireReducer>;
};

const store = createStore(questionnaireReducer);

export default store;
