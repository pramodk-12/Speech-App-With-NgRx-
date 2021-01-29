import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Speech } from '../speech';
import { SpeechService } from '../speech.service';

@Component({
  selector: 'app-speech-shell',
  templateUrl: './speech-shell.component.html',
  styleUrls: ['./speech-shell.component.scss']
})
export class SpeechShellComponent implements OnInit {
  // speeches: { authorName: string; date: string; keywords: string; speech: string; id: string; }[];
  speeches:any;

  constructor(
              private router: Router,
              private route: ActivatedRoute) { }

  // speeches$  = this.speechService.speechAction$;
  // toggle$ = this.speechService.toggleAction$;
  // speechselected$ = this.speechService.speechEditAction$;


  ngOnInit(): void {
    if( ! localStorage.getItem('speeches')) {
      let speeches = [
        {
          authorName:'Dhoni',
          date:'2021-01-24',
          keywords:'Lorem,ipsum',
          speechText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia id arcu eu mollis. Vestibulum aliquet erat at massa consequat malesuada. Suspendisse ultrices interdum risus eget pellentesque. Aliquam sit amet imperdiet odio. Pellentesque gravida leo sit amet enim suscipit, ac pretium lectus lacinia. In tincidunt pretium libero at rhoncus. Donec tristique pellentesque ex pharetra interdum. Integer nec vehicula eros. Mauris ac varius quam. Mauris sed cursus massa. Praesent at pharetra diam. Cras enim orci, lobortis ut fringilla sed, facilisis vel sem. Fusce vitae metus aliquet, tristique ex vitae, aliquet justo. Morbi lacinia ut justo quis viverra.',
          id:'1611720494444'
        },
        {
          authorName:'Kohli',
          date:'2021-01-24',
          keywords:'Lorem,ipsum',
          speechText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia id arcu eu mollis. Vestibulum aliquet erat at massa consequat malesuada. Suspendisse ultrices interdum risus eget pellentesque. Aliquam sit amet imperdiet odio. Pellentesque gravida leo sit amet enim suscipit, ac pretium lectus lacinia. In tincidunt pretium libero at rhoncus. Donec tristique pellentesque ex pharetra interdum. Integer nec vehicula eros. Mauris ac varius quam. Mauris sed cursus massa. Praesent at pharetra diam. Cras enim orci, lobortis ut fringilla sed, facilisis vel sem. Fusce vitae metus aliquet, tristique ex vitae, aliquet justo. Morbi lacinia ut justo quis viverra.',
          id:'1611720503376'
        },
        {
          authorName:'Rohit',
          date:'2021-01-26',
          keywords:'Lorem,ipsum',
          speechText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia id arcu eu mollis. Vestibulum aliquet erat at massa consequat malesuada. Suspendisse ultrices interdum risus eget pellentesque. Aliquam sit amet imperdiet odio. Pellentesque gravida leo sit amet enim suscipit, ac pretium lectus lacinia. In tincidunt pretium libero at rhoncus. Donec tristique pellentesque ex pharetra interdum. Integer nec vehicula eros. Mauris ac varius quam. Mauris sed cursus massa. Praesent at pharetra diam. Cras enim orci, lobortis ut fringilla sed, facilisis vel sem. Fusce vitae metus aliquet, tristique ex vitae, aliquet justo. Morbi lacinia ut justo quis viverra.',
          id:'1611720629313'
        },
        {
          authorName:'Rahane',
          date:'2021-01-27',
          keywords:'Lorem,ipsum',
          speechText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia id arcu eu mollis. Vestibulum aliquet erat at massa consequat malesuada. Suspendisse ultrices interdum risus eget pellentesque. Aliquam sit amet imperdiet odio. Pellentesque gravida leo sit amet enim suscipit, ac pretium lectus lacinia. In tincidunt pretium libero at rhoncus. Donec tristique pellentesque ex pharetra interdum. Integer nec vehicula eros. Mauris ac varius quam. Mauris sed cursus massa. Praesent at pharetra diam. Cras enim orci, lobortis ut fringilla sed, facilisis vel sem. Fusce vitae metus aliquet, tristique ex vitae, aliquet justo. Morbi lacinia ut justo quis viverra.',
          id:'1611720670294'
        }
      ];

      localStorage.setItem( 'speeches', JSON.stringify(speeches) );
    }

  }


  sendSpeech(speech: Speech) {
    // this.speechService.editSpeechChanged(speech);
  }

  home() {
    // this.speechService.toggleChanged(true);
  }

  newSpeech() {
    // let emptySpeech1 : Speech = {
    //   authorName: null,
    //   date: null,
    //   keywords:null,
    //   speech:null,
    //   id:null,
    // }
    // this.speechService.toggleChanged(false);
    // this.speechService.editSpeechChanged(emptySpeech1);
  }

}
