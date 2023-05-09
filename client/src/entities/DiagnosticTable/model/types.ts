import { type ICDSectionType } from '../../ICDDiagnosis';

export interface ICDListItemType extends ICDSectionType {
  blocks?: ICDSectionType[]
}
