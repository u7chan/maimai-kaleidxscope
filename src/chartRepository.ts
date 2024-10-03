import type { Chart } from './types'
import { defaultCharts } from './defaultCharts'

interface ChartRepository {
  fetch: () => Chart[]
}

const KEY_CHARTS_CACHE = 'KEY_CHARTS_CACHE'

const chartRepositoryImpl: ChartRepository = {
  fetch: (): Chart[] => {
    const charts = JSON.parse(localStorage.getItem(KEY_CHARTS_CACHE) || '[]') as Chart[]
    return charts.length > 0 ? charts : defaultCharts
  },
}

export const chartRepository: ChartRepository = chartRepositoryImpl
