import * as fs from 'node:fs'
import { parse } from 'csv-parse/sync'
import { z } from 'zod'

const SRC_DIR = 'assets'
const DIST_DIR = 'dist'

const csvSchema = z.array(
  z.object({
    title: z.string(),
    exp: z.string(),
    mas: z.string(),
    remas: z.string(),
    ver: z.string(),
    jacket: z.string(),
  }),
)

function main() {
  const targetCsvFile: string | undefined = process.argv[2]
  if (!targetCsvFile) {
    console.error(`Error: Missing argument [args]... ${SRC_DIR}/[TARGET_CSV_FILE]`)
    return
  }
  const rawData = fs.readFileSync(`${SRC_DIR}/${targetCsvFile}`)
  const records = parse(rawData, { columns: true })
  const data = csvSchema
    .parse(records)
    .map(({ title, ver: version, jacket, exp, mas, remas }, i) => ({
      id: `${i + 1}`,
      title,
      version,
      jacket,
      level: [
        { type: 'expert', value: exp },
        { type: 'master', value: mas },
        { type: 'remaster', value: remas },
      ].filter((x) => x.value),
    }))
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR)
  }
  fs.writeFileSync(`${DIST_DIR}/${targetCsvFile.split('.')[0]}.json`, JSON.stringify(data, null, 2))
}

main()
