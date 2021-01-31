import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/State/app.state';
import { Speech } from '../speech';
import { getErrorMessage, getSpeechList } from '../State';
import { loadSpeeches } from '../State/speech.actions';

@Component({
  selector: 'app-speech-list',
  templateUrl: './speech-list.component.html',
  styleUrls: ['./speech-list.component.scss']
})
export class SpeechListComponent implements OnInit {
  speeches: any;
  speeches$: Observable<Speech[]>;
  errorMessage$: Observable<string>;

  constructor(private router:Router,
              private route:ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadSpeeches());
    this.speeches$ = this.store.select(getSpeechList);
    this.errorMessage$ = this.store.select(getErrorMessage)

  }

  sendSpeech(id:number) {
    this.router.navigate(['../view',id],{relativeTo:this.route});
  }
}
