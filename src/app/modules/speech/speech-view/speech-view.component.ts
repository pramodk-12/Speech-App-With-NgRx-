import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/State/app.state';
import { Speech } from '../speech';
import { SpeechService } from '../speech.service';
import { getErrorMessage, getSpeechById } from '../State';
import { loadSpeechById, loadSpeechByIdFail } from '../State/speech.actions';

@Component({
  selector: 'app-speech-view',
  templateUrl: './speech-view.component.html',
  styleUrls: ['./speech-view.component.scss']
})
export class SpeechViewComponent implements OnInit {
  // speeches: any;
  // speech: any;
  speech$: Observable<Speech>;
  errorMessage$: Observable<string>;
  constructor(private speechService: SpeechService,
              private router: Router,
              private route:ActivatedRoute,
              private store:Store<AppState>) { }


  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if(id == 0) {
      const error = 'Invalid Speech Id';
      this.store.dispatch(loadSpeechByIdFail({error}));
      this.errorMessage$ = this.store.select(getErrorMessage);

}
    else {
      this.store.dispatch(loadSpeechById({speechId:id}));
      this.speech$ = this.store.select(getSpeechById);
      this.errorMessage$ = this.store.select(getErrorMessage);
    }
  }

  deleteSpeech(speechId:number) {
    if(confirm('Are you sure you want to delete')) {
      this.speechService.deleteSpeech(speechId);
      this.router.navigate(['/speeches/list']);
    }
  }





}
