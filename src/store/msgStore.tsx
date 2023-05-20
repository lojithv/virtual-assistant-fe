import { bind } from "@react-rxjs/core";
import { createSignal } from "@react-rxjs/utils";

// A signal is an entry point to react-rxjs. It's equivalent to using a subject
export const [msgListChange$, setMsgList] = createSignal<any[]>();

export const [useMsgList, msgList$] = bind(msgListChange$, [])