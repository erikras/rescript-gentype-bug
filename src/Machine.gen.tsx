/* TypeScript file generated from Machine.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as Curry__Es6Import from 'rescript/lib/es6/curry.js';
const Curry: any = Curry__Es6Import;

// @ts-ignore: Implicit any on import
import * as MachineBS__Es6Import from './Machine.bs';
const MachineBS: any = MachineBS__Es6Import;

import {listener as Observable_listener} from './Observable.gen';

import {unlisten as Observable_unlisten} from './Observable.gen';

// tslint:disable-next-line:interface-over-type-literal
export type transition<state,event> = (_1:{
  readonly state: state; 
  readonly event: event; 
  readonly send: ((_1:event) => void)
}) => state;

// tslint:disable-next-line:interface-over-type-literal
export type machine<state,event> = {
  readonly getState: () => state; 
  readonly send: (_1:event) => void; 
  readonly listen: (_1:Observable_listener<state>) => Observable_unlisten
};

export const createMachine: <event,state>(_1:{ readonly initialState: state; readonly transition: transition<state,event> }) => machine<state,event> = function <event,state>(Arg1: any) {
  const result = Curry._2(MachineBS.createMachine, Arg1.initialState, function (Argstate: any, Argevent: any, Argsend: any) {
      const result1 = Arg1.transition({state:Argstate, event:Argevent, send:Argsend});
      return result1
    });
  return result
};
