import { configureStore } from '@reduxjs/toolkit';
import { processAnamnesisReducer } from '../../../../features/ProcessAnamnesis/model/processAnamnesisSlice';
import { type StateSchema } from './StateSchema';
import { diagnosticReducer } from '../../../../features/DiseasesDiagnostic/model/diagnosticSlice';

export function createReduxStore (initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      processAnamnesis: processAnamnesisReducer,
      diagnostic: diagnosticReducer
    },
    preloadedState: initialState
  });
}
