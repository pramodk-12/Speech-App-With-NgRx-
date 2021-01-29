import {  ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Speech } from '../speech';
import { SpeechService } from '../speech.service';

@Component({
  selector: 'app-speech-edit',
  templateUrl: './speech-edit.component.html',
  styleUrls: ['./speech-edit.component.scss']
})
export class SpeechEditComponent implements OnInit {


  speechForm:FormGroup;
  speeches: any;
  speech: any;
  speechType:string;
  paramId: any;
  constructor(private router:Router,
              private fb:FormBuilder,
              private route:ActivatedRoute,
              private speechService: SpeechService) {  }




   saveSpeech() {
     if(this.speechType == 'New Speech') {
       this.speeches = this.speechService.newSpeech(this.speechForm.value);
       localStorage.setItem('speeches', JSON.stringify(this.speeches));
       this.router.navigate(['/speeches/list']);
     }
     else {
       this.speeches = this.speechService.updateSpeech(this.speechForm.value);
       localStorage.setItem('speeches', JSON.stringify(this.speeches));
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






  ngOnInit(): void {
    this.speechForm = this.fb.group({
      authorName: ['',[Validators.required,Validators.min(4)]],
      date:['',Validators.required],
      id:[''],
      keywords: ['',Validators.required],
      speechText: ['',Validators.required],

    })
    this.route.paramMap.subscribe(
      params => {
        this.paramId =  params.get('id')
        if(this.paramId == 0) {
          this.speechForm.reset();
          this.speechType = 'New Speech';
        }
        else {
          this.speechType = 'Edit Speech'
          this.speeches = JSON.parse(localStorage.getItem('speeches'))
          this.speech = this.speeches.find((element:Speech) => element.id == this.paramId);
          this.speechForm.patchValue({
            authorName: this.speech.authorName,
            date:this.speech.date,
            id:this.speech.id,
            keywords:this.speech.keywords,
            speechText: this.speech.speechText,
          })

        }
      }
    )




  }

}
