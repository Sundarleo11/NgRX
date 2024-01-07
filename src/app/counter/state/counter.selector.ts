import { createSelector } from "@ngrx/store";
import { AppState } from "./counter.state";

export const selectorcounter= (state:AppState)=> state.counter;

export const selectCount=createSelector(
    selectorcounter,
    (state)=>state.count
)