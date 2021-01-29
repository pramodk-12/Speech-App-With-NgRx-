import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Speech } from '../speech';
import { SpeechService } from '../speech.service';

@Component({
  selector: 'app-speech-view',
  templateUrl: './speech-view.component.html',
  styleUrls: ['./speech-view.component.scss']
})
export class SpeechViewComponent implements OnInit {
  speeches: any;
  speech: any;
  constructor(private speechService: SpeechService,
              private router: Router,
              private route:ActivatedRoute) { }


  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.speeches = JSON.parse(localStorage.getItem('speeches'))
    this.speech = this.speeches.find((element:Speech) => element.id == id);
  }

  deleteSpeech() {
    if(confirm('Are you sure you want to delete')) {
      this.speechService.deleteSpeech(this.speech.id);
      this.router.navigate(['/speeches/list']);
    }
  }




}
