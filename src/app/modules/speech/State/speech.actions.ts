import { createAction, props } from "@ngrx/store";
import { Speech } from "../speech";


export const loadSpeeches = createAction(
  'Get Speeches list'
);

export const loadSpeechesSuccess = createAction(
  '[Get Speeches List] Success',
  props<{speeches: Speech[],error:string}>()
)

export const loadSpeechesFail = createAction(
  '[Get Speeches List] Fail',
  props<{error:string}>()
)

export const loadSpeechById = createAction(
  '[Get Speech By Id]',
  props<{speechId:number}>()
)

export const loadSpeechByIdSuccess = createAction(
  '[Get Speech By Id] Success',
  props<{speech:Speech,error:string}>()
)

export const loadSpeechByIdFail = createAction(
  '[Get Speech By Id] Fail',
  props<{error:string}>()
)

export const addSpeech = createAction(
  'Add New Speech',
  props<{speech:Speech}>()
)

export const updateSpeech = createAction(
  'Update Speech',
  props<{speech:Speech}>()
)
