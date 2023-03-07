export interface EntityItem {
  name: string
  TUI: string
  open?: boolean
  info: EntityInfo
}

interface EntityInfo {
  CUI: string
  originalName?: string
  definition?: string
}
