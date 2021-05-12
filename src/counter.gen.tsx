/* TypeScript file generated from counter.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as counterBS__Es6Import from './counter.bs';
const counterBS: any = counterBS__Es6Import;

import {machine as Machine_machine} from './Machine.gen';

// tslint:disable-next-line:interface-over-type-literal
export type state = 
    { tag: "Idle"; value: number }
  | { tag: "Paused"; value: number };

// tslint:disable-next-line:interface-over-type-literal
export type event = 
    "Increment"
  | "Decrement"
  | "Reset"
  | "Pause"
  | "Unpause";

export const createCounterMachine: () => Machine_machine<state,event> = counterBS.createCounterMachine;
