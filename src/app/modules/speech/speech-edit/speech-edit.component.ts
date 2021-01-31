import {  ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/State/app.state';
import { Speech } from '../speech';
import { SpeechService } from '../speech.service';
import { getErrorMessage, getSpeechById } from '../State';
import { addSpeech, loadSpeechById, updateSpeech } from '../State/speech.actions';

@Component({
  selector: 'app-speech-edit',
  templateUrl: './speech-edit.component.html',
  styleUrls: ['./speech-edit.component.scss']
})
export class SpeechEditComponent implements OnInit,OnDestroy {


  speechForm:FormGroup;
  speeches: any;
  speech: Speech;
  speechType:string;
  paramId: number;
  speechSubscription: Subscription;
  routeSubscription: Subscription;
  errorMessage$: Observable<string>;
  constructor(private router:Router,
              private fb:FormBuilder,
              private route:ActivatedRoute,
              private speechService: SpeechService,
              private store:Store<AppState>) {  }


  ngOnInit(): void {


    this.speechSubscription = this.store.select(getSpeechById).subscribe(
      res => this.speech = res
    )


    this.speechForm = this.fb.group({
      authorName: ['',[Validators.required,Validators.min(4)]],
      date:['',Validators.required],
      id:[''],
      keywords: ['',Validators.required],
      speechText: ['',Validators.required],
    });



    this.routeSubscription = this.route.paramMap.subscribe(
      params => {
        this.paramId =  +params.get('id');
        if(this.paramId == 0) {
          this.speechType = 'New Speech';
          this.store.dispatch(loadSpeechById({speechId:this.paramId}));
          this.setForm(this.speech)
        }
        else {
          this.speechType = 'Edit Speech'
          this.store.dispatch(loadSpeechById({speechId:this.paramId}));
          this.setForm(this.speech)
        }
      }
    )

    this.errorMessage$ = this.store.select(getErrorMessage);

  }

  setForm(speech:Speech) {
    this.speechForm.patchValue({
      authorName: speech.authorName,
      date:speech.date,
      id:speech.id,
      keywords:speech.keywords,
      speechText: speech.speechText,
    })

  }

  saveSpeech() {
    if(this.speechType == 'New Speech') {
      this.store.dispatch(addSpeech({speech:this.speechForm.value}));
      this.router.navigate(['/speeches/list']);
    }
    else {
      console.log(this.speechForm.value)
      this.store.dispatch(updateSpeech({speech:this.speechForm.value}));
      this.router.navigate(['/speeches/list']);
    }
  }


  deleteSpeech() {
    if(confirm('Are you sure you want to delete')) {
      this.speechService.deleteSpeech(this.paramId);
      this.router.navigate(['/speeches/list']);
    }
  }

  cancel() {
   this.router.navigate(['/speeches/list']);

  }

  ngOnDestroy():void {
    this.speechSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

}
