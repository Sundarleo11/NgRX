import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.action';


export interface CounterState{
  count:number;
}

export const initialCountstate : CounterState ={
    count:0,
}

export const counterReducer = createReducer(
    initialCountstate,
  on(increment, (state) => ({
    ...state,
    count: state.count+ 1,
  })),
  on(decrement, (state) => ({
    ...state,
    count: state.count-1,
  })),

  on(reset, (state) => ({
    ...state,
    count: 0,
  }))
);
