import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type EntityItem } from '../../../entities';

interface processAnamnesisProps {
  text: string
}
export const processAnamnesisRequest = createAsyncThunk<EntityItem[], processAnamnesisProps, { rejectValue: string }>(
  'login/processAnamnesis',
  async ({ text }, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/process-text/', { text });
      if (!response.data) {
        throw new Error();
      }
      console.log(response);
      return response.data.entities;
    } catch (e) {
      console.log(e);
      return rejectWithValue('process error');
    }
  }
);
