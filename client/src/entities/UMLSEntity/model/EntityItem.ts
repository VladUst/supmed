export interface EntityItem {
  name: string
  TUI: string
  info: EntityInfo
}

interface EntityInfo {
  CUI: string
  originalName?: string
  definition?: string
}
