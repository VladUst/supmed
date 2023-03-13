export interface DiseaseSchema {
  name: string
}

export interface PredictionsSchema {
  ontologyPrediction: string[]
  mlPrediction: string[]
}

export interface DiagnosticSchema {
  diseases: DiseaseSchema[]
  symptoms: string[]
  isLoading: boolean
  error?: string
}
