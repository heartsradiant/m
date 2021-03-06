import { sep } from "path"

import { pipe } from "../pipe/pipe"
import { trim } from "../trim/trim"
import { split } from "../split/split"
import { push } from "../push/push"
import { join } from "../join/join"
import { dropLast } from "../drop-last/drop-last"

const removeTrailingSlash = source =>
  source[source.length - 1] === sep ? source.slice(0, -1) : source

/**
 * Rename a file
 *
 * @param {string} newName  New file name
 * @param {string} filePath Absolute file path
 *
 * @returns {string}
 */
const renameFile = newName =>
  pipe(
    removeTrailingSlash,
    split(sep),
    dropLast,
    push(trim(sep)(newName)),
    join(sep)
  )

export { renameFile }
