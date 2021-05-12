type unlisten = () => unit
type listener<'value> = ('value) => unit
type listenerId<'value> = {id: int, listener: listener<'value>}

type subject<'value> = {
  listen: (listener<'value>) => unlisten,
  get: unit => 'value,
  set: ('value) => unit,
}

@genType
let createSubject = (initial: 'value) => {
  open Js.Array2
  let value = ref(initial)
  let nextId = ref(0)
  let listeners: array<listenerId<'value>> = []
  {
    get: () => value.contents,
    set: (v: 'value) => {
      value := v
      listeners->forEach(({listener}) => listener(v))
    },
    listen: (listener: listener<'value>) => {
      let id = nextId.contents
      nextId := id + 1
      listeners->push({id, listener})->ignore
      listener(value.contents)
      () => {
        let index = listeners->reducei(
          (foundIndex, listener, index) =>
            listener.id === id ? index : foundIndex,
          -1,
        )
        if index >= 0 {
          listeners->removeFromInPlace(~pos=index)->ignore
        }
      }
    },
  }
}

