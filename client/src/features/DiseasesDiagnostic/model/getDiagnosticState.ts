import { type StateSchema } from '../../../app/providers/StoreProvider';

export const getDiagnosticState = (state: StateSchema) => state.diagnostic;

export const getSymptoms = (state: StateSchema) => state.diagnostic.symptoms ?? undefined;
