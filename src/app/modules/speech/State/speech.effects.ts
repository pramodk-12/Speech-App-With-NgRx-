import { Injectable } from "@angular/core";
import { SpeechService } from "../speech.service";
import { createEffect, ofType,Actions } from "@ngrx/effects";
import * as SpeechActions from './speech.actions';
import { map, mergeMap } from "rxjs/operators";

@Injectable()
export class SpeechEffects {
  constructor(private speechService:SpeechService,
              private actions$:Actions,) {}

  loadSpeeches$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(SpeechActions.loadSpeeches),
        mergeMap(() => this.speechService.getSpeeches().pipe(
          map(speeches => {
            if (speeches.length != 0) {
              const error = null;
              return SpeechActions.loadSpeechesSuccess({speeches,error})
            }
            else {
              return SpeechActions.loadSpeechesFail({error:'No Speeches. Add New Speech '})
            }
          })
        ))
    )
  });


  loadSpeechById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SpeechActions.loadSpeechById),
      mergeMap((action) => this.speechService.getSpeechById(action.speechId).pipe(
        map(speech => {
          if(speech) {
            const error = null;
            return SpeechActions.loadSpeechByIdSuccess({speech,error})
          }
          else {
            const error = 'Invalid Speech Id';
            return SpeechActions.loadSpeechByIdFail({error})
          }
        })
      ) )
    )
  });

  addSpeech$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SpeechActions.addSpeech),
      mergeMap((action) => this.speechService.newSpeech(action.speech).pipe(
        map(() => SpeechActions.loadSpeeches() )
      ))
    )
  });

  updateSpeech$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SpeechActions.updateSpeech),
      mergeMap((action) => this.speechService.updateSpeech(action.speech).pipe(
        map(() => SpeechActions.loadSpeeches() )
      ))
    )
  });


}
