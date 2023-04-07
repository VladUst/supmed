import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type processAnamnesisSchema } from './processAnamnesisSchema';
import { processAnamnesisRequest } from './processAnamnesisRequest';

const initialState: processAnamnesisSchema = {
  entitiesList: undefined,
  isLoading: false,
  anamnesis: ''
};

export const processAnamnesisSlice = createSlice({
  name: 'process-anamnesis',
  initialState,
  reducers: {
    setAnamnesis: (state, action: PayloadAction<string>) => {
      state.anamnesis = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(processAnamnesisRequest.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(processAnamnesisRequest.fulfilled, (state, action) => {
        state.entitiesList = action.payload;
        state.isLoading = false;
      })
      .addCase(processAnamnesisRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: processAnamnesisActions } = processAnamnesisSlice;
export const { reducer: processAnamnesisReducer } = processAnamnesisSlice;
