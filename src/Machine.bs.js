// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var Observable = require("./Observable.bs.js");

function createMachine(initialState, transition) {
  var subject = Observable.createSubject(initialState);
  var send = function ($$event) {
    var newState = Curry._3(transition, Curry._1(subject.get, undefined), $$event, send);
    console.info("WTF", $$event, Curry._1(subject.get, undefined), newState);
    return Curry._1(subject.set, newState);
  };
  return {
          getState: (function (param) {
              return Curry._1(subject.get, undefined);
            }),
          send: send,
          listen: (function (listener) {
              return Curry._1(subject.listen, listener);
            })
        };
}

exports.createMachine = createMachine;
/* No side effect */
