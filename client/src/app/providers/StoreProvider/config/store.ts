import { configureStore } from '@reduxjs/toolkit';
import { processAnamnesisReducer } from '../../../../features/ProcessAnamnesis/model/processAnamnesisSlice';
import { type StateSchema } from './StateSchema';

export function createReduxStore (initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      processAnamnesis: processAnamnesisReducer
    },
    preloadedState: initialState
  });
}
