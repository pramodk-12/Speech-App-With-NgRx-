import { createReducer, on } from "@ngrx/store";
import { Speech } from "../speech";
import * as SpeechActions from './speech.actions';


export interface SpeechState {
  speeches:Speech[],
  selectedSpeech:Speech,
  errorMessage:string
}

const initialState:SpeechState = {
  speeches:[],
  selectedSpeech:null,
  errorMessage:''
}

export const speechReducer = createReducer<SpeechState>(
  initialState,
  on(SpeechActions.loadSpeechesSuccess, (state,action): SpeechState => {
    return {
      ...state,
      speeches: action.speeches,
      errorMessage:action.error
    }
  }),
  on(SpeechActions.loadSpeechesFail , (state,action): SpeechState => {
    return {
      ...state,
      speeches:null,
      errorMessage: action.error
    }
  } ),
  on(SpeechActions.loadSpeechByIdSuccess, (state,action): SpeechState => {
    console.log(action);
    return {
      ...state,
      selectedSpeech:action.speech,
      errorMessage:action.error
    }
  }),
  on(SpeechActions.loadSpeechByIdFail, (state,action): SpeechState => {
    return {
      ...state,
      selectedSpeech:null,
      errorMessage:action.error
    }
  })
)






