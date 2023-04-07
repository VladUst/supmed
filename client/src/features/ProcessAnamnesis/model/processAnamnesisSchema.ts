import { type EntityItem } from '../../../entities';

export interface processAnamnesisSchema {
  entitiesList?: EntityItem[]
  isLoading: boolean
  anamnesis: string
  error?: string
}
