import { DataSource } from "typeorm"
import { dsOptions } from "./data-source"
import { runSeeders } from "typeorm-extension"

export const dataSource = new DataSource(dsOptions)
dataSource.initialize().then(async () => {
  await runSeeders(dataSource)
  process.exit()
})
