import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SpeechViewComponent } from './speech-view/speech-view.component';
import { SpeechEditComponent } from './speech-edit/speech-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpeechShellComponent } from './speech-shell/speech-shell.component';
import { SpeechListComponent } from './speech-list/speech-list.component';
import { StoreModule } from '@ngrx/store';
import { speechReducer } from './State/speech.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SpeechEffects } from './State/speech.effects';



@NgModule({
  declarations: [
    SpeechViewComponent,
    SpeechEditComponent,
    SpeechShellComponent,
    SpeechListComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('speeches',speechReducer),
    EffectsModule.forFeature([SpeechEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: SpeechShellComponent,
        children:[
          {
            path: 'list',
            component:SpeechListComponent
          },
          {
            path: 'view/:id',
            component:SpeechViewComponent,
          },
          {
            path:'edit/:id',
            component:SpeechEditComponent
          },
          {
            path: '',
            redirectTo:'list',
            pathMatch: 'full'
          },
        ]
      }
    ])
  ]
})
export class SpeechModule { }
