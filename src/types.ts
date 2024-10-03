export interface Chart {
  id: string
  title: string
  version: string
  jacket: string
  level: {
    type: 'expert' | 'master' | 'remaster'
    value: string
  }[]
  played?: boolean
}
