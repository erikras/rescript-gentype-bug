type state = Idle(int) | Paused(int)
type event = Increment | Decrement | Reset | Pause | Unpause

@genType
let createCounterMachine = () => {
  let result = Machine.createMachine(~initialState=Idle(0), ~transition=(
    ~state: state,
    ~event: event,
    ~send as _,
  ) =>
    switch (state, event) {
    | (Idle(value), Increment) => Idle(value + 1)
    | (Idle(value), Decrement) => Idle(value - 1)
    | (Idle(_), Reset) => Idle(0)
    | (Idle(value), Pause) => Paused(value)
    | (Paused(value), Unpause) => Idle(value)
    | (Idle(_), Unpause)
    | (Paused(_), _) => state
    }
  )
  result
}
