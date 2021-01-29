import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'speeches',
    loadChildren: () =>
        import('./modules/speech/speech.module').then(m => m.SpeechModule)
},
{ path: '',redirectTo:'speeches', pathMatch: 'full' },
// { path: '**',redirectTo:'speeches', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
