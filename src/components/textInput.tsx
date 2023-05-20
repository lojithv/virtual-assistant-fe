import { bind } from "@react-rxjs/core"
import { createSignal } from "@react-rxjs/utils"

// A signal is an entry point to react-rxjs. It's equivalent to using a subject
export const [textChange$, setText] = createSignal<any>();

export const [useText, text$] = bind<any>(textChange$, "")

export default function TextInput() {
  const text = useText()

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      Echo: {text}
    </div>
  )
}