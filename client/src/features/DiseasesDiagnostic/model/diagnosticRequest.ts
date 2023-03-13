import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type DiseaseSchema } from './types';

interface diagnosticProps {
  symptoms: string[]
}
export const diagnosticRequest = createAsyncThunk<DiseaseSchema[], diagnosticProps, { rejectValue: string }>(
  'login/diagnostic',
  async (symptoms, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/predict-diseases/', symptoms);
      if (!response.data) {
        throw new Error();
      }
      console.log(response);
      const diseasesList: DiseaseSchema[] = [
        ...response.data.ontologyPrediction.map((item: string) => ({ name: item })),
        ...response.data.mlPrediction.map((item: string) => ({ name: item }))
      ];
      console.log(diseasesList);
      return diseasesList;
    } catch (e) {
      console.log(e);
      return rejectWithValue('diagnostic error');
    }
  }
);
