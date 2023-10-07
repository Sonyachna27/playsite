import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { navigationReducer } from '../components/roters/RouteForStep';
 const rootReducer = combineReducers({
  form: formReducer,
  navigation: navigationReducer,
  // Додайте інші редюсери вашого стору, якщо є
});

const  store = createStore(rootReducer);

export default store;