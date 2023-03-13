import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { diagnosticRequest } from './diagnosticRequest';
import { type DiagnosticSchema } from './types';

const initialState: DiagnosticSchema = {
  diseases: [],
  symptoms: [],
  isLoading: false
};

export const diagnosticSlice = createSlice({
  name: 'diagnostic',
  initialState,
  reducers: {
    setSymptoms: (state, action: PayloadAction<string[]>) => {
      state.symptoms = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(diagnosticRequest.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(diagnosticRequest.fulfilled, (state, action) => {
        state.diseases = action.payload;
        state.isLoading = false;
      })
      .addCase(diagnosticRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: diagnosticActions } = diagnosticSlice;
export const { reducer: diagnosticReducer } = diagnosticSlice;
