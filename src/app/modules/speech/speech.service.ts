import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Speech } from './speech';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  speeches: Speech[];

  constructor() { }

  updateSpeech(speech:Speech) {
    this.speeches = JSON.parse(localStorage.getItem('speeches'));
    this.speeches = this.speeches.filter((element:Speech) => element.id != speech.id);
    this.speeches = [...this.speeches,speech];
    localStorage.setItem('speeches',JSON.stringify(this.speeches));
    return of(this.speeches);
  }

  newSpeech(speech:Speech) {
    this.speeches = JSON.parse(localStorage.getItem('speeches'));
    this.speeches = [...this.speeches,speech];
    localStorage.setItem('speeches',JSON.stringify(this.speeches));
    return of(this.speeches);
  }

  deleteSpeech(paramId:number) {
    this.speeches = JSON.parse(localStorage.getItem('speeches'));
    this.speeches = this.speeches.filter((element:Speech) => element.id != paramId)
    localStorage.setItem('speeches',JSON.stringify(this.speeches));
  }

  getSpeeches() {
    this.speeches = JSON.parse(localStorage.getItem('speeches'));
    return of(this.speeches);
  }

  getSpeechById(speechId:number) {
    if(speechId == 0) {
      var newSpeech:Speech = {
        authorName: '',
        date: null,
        keywords:'',
        speechText:'',
        id: Date.now()
      }
      return of(newSpeech);
    }
    else {
      this.speeches = JSON.parse(localStorage.getItem('speeches'));
      var speech  = this.speeches.find((element:Speech) => element.id == speechId);
      return of(speech);
    }
  }









}
