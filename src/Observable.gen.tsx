/* TypeScript file generated from Observable.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as ObservableBS__Es6Import from './Observable.bs';
const ObservableBS: any = ObservableBS__Es6Import;

// tslint:disable-next-line:interface-over-type-literal
export type unlisten = () => void;

// tslint:disable-next-line:interface-over-type-literal
export type listener<value> = (_1:value) => void;

// tslint:disable-next-line:interface-over-type-literal
export type subject<value> = {
  readonly listen: (_1:listener<value>) => unlisten; 
  readonly get: () => value; 
  readonly set: (_1:value) => void
};

export const createSubject: <value>(initial:value) => subject<value> = ObservableBS.createSubject;
