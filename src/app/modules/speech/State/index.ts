import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "src/app/State/app.state";
import { SpeechState } from "./speech.reducer";

export interface State extends AppState {
  speeches: SpeechState;
}

const getSpeechFeatureState = createFeatureSelector<SpeechState>('speeches');

export const getSpeechList = createSelector(getSpeechFeatureState, state => state.speeches);

export const getErrorMessage = createSelector(getSpeechFeatureState, state => state.errorMessage);

export const getSpeechById = createSelector(getSpeechFeatureState, state => state.selectedSpeech);

// export const getSpeechByID = createSelector(getSpeechFeatureState, state => state.selectedSpeech)
