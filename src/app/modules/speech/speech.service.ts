import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Speech } from './speech';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  speeches: any;

  constructor() { }

  updateSpeech(speech:Speech) {
    this.speeches = JSON.parse(localStorage.getItem('speeches'));
    this.speeches = this.speeches.filter((element:Speech) => element.id != speech.id);
    this.speeches = [...this.speeches,speech];
    return this.speeches
  }

  newSpeech(speech:Speech) {
    this.speeches = JSON.parse(localStorage.getItem('speeches'));
    var uniqid = Date.now();
    let temp = {...speech};
    temp.id = uniqid;
    this.speeches = [...this.speeches,temp];
    return this.speeches;
  }

  deleteSpeech(paramId:number) {
    this.speeches = JSON.parse(localStorage.getItem('speeches'));
    this.speeches = this.speeches.filter((element:Speech) => element.id != paramId)
    localStorage.setItem('speeches',JSON.stringify(this.speeches));
  }









}
