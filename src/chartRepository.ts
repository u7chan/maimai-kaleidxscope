import type { Chart } from './types'

interface ChartRepository {
  fetch: () => Chart[]
}

const chartRepositoryImpl: ChartRepository = {
  fetch: (): Chart[] => {
    return [
      {
        id: '1',
        title: 'プリズム△▽リズム1',
        version: 'maimai でらっくす PRiSM',
        jacket: './dummy.png',
        level: [
          { type: 'expert', value: '12' },
          { type: 'master', value: '13' },
        ],
        played: true,
      },
      {
        id: '2',
        title: 'プリズム△▽リズム2',
        version: 'maimai でらっくす PRiSM Plus',
        jacket: './dummy.png',
        level: [
          { type: 'master', value: '13' },
          { type: 'remaster', value: '13+' },
        ],
        played: false,
      },
    ]
  },
}

export function getChartRepository(): ChartRepository {
  return chartRepositoryImpl
}
