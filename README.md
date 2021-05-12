# ReScript GenType Bug

## Installation

```sh
yarn
```

## Build

```sh
yarn start
```

## Problem

`counter.gen.tsx` never gets the mapping to convert the `event` to an `int`.

It should have a line that looks like:

```ts
const $$toJS914395812: { [key: string]: any } = {"0": "Increment", "1": "Decrement"};
```

If you put all of the contents of `counter.res` into `Machine.res`, it works. There's something about the deference to other modules that breaks `genType`.