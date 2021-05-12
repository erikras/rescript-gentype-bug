type transition<'state, 'event> = (
  ~state: 'state,
  ~event: 'event,
  ~send: 'event => unit,
) => 'state

type machine<'state, 'event> = {
  getState: unit => 'state,
  send: 'event => unit,
  listen: Observable.listener<'state> => Observable.unlisten,
}

@genType
let createMachine = (
  ~initialState: 'state,
  ~transition: transition<'state, 'event>,
) => {
  let subject = Observable.createSubject(initialState)
  let rec send = (event: 'event) => {
    let newState = transition(~state=subject.get(), ~event, ~send)
    Js_console.info4("WTF", event, subject.get(), newState)
    subject.set(newState)
  }
  // let rec send = (event:'event) => state.set(transition(~state=state.get(), ~event=event, ~send=send))
  {
    getState: () => subject.get(),
    send: send,
    listen: listener => subject.listen(listener),
  }
}
