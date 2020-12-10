import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyFirstStageComponent} from './my-first-stage/my-first-stage.component';
import {MySecondStageComponent} from './my-second-stage/my-second-stage.component';
import {MySecondPageOneComponent} from './my-second-page-one/my-second-page-one.component';
import {MySecondPageTwoComponent} from './my-second-page-two/my-second-page-two.component';

const routes: Routes = [
  {
    path: 'myFirstStage', component: MyFirstStageComponent
  },
  {
    path: 'mySecondStage',
    component: MySecondStageComponent,
    children: [
      {
        path: 'one',
        component: MySecondPageOneComponent
      },
      {
        path: 'two',
        component: MySecondPageTwoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
