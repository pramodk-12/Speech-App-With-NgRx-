import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Speech } from '../speech';

@Component({
  selector: 'app-speech-list',
  templateUrl: './speech-list.component.html',
  styleUrls: ['./speech-list.component.scss']
})
export class SpeechListComponent implements OnInit {
  speeches: any;

  constructor(private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.speeches = JSON.parse(localStorage.getItem('speeches'))
  }

  sendSpeech(id:number) {
    console.log(id);
    this.router.navigate(['../view',id],{relativeTo:this.route});
  }
}
