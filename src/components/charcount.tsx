import { map } from "rxjs/operators"
import { bind, Subscribe } from "@react-rxjs/core"
import { text$ } from "./textInput"

// Previously...
// const [useText, text$] = bind(...);

export const [useCharCount, charCount$] = bind(
  text$.pipe(
    map((text) => text.length)
  )
)

export default function CharacterCount() {
  const count = useCharCount()

  return <>Character Count: {count}</>
}