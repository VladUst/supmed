import { type processAnamnesisSchema } from '../../../../features/ProcessAnamnesis';
import { type DiagnosticSchema } from '../../../../features/DiseasesDiagnostic/model/types';

export interface StateSchema {
  processAnamnesis: processAnamnesisSchema
  diagnostic: DiagnosticSchema
}
