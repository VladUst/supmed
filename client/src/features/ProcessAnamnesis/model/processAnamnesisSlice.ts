import { createSlice } from '@reduxjs/toolkit';
import { type processAnamnesisSchema } from './processAnamnesisSchema';
import { processAnamnesisRequest } from './processAnamnesisRequest';

const initialState: processAnamnesisSchema = {
  entitiesList: undefined,
  isLoading: false
};

export const processAnamnesisSlice = createSlice({
  name: 'process-anamnesis',
  initialState,
  reducers: {
    /* setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    } */
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
