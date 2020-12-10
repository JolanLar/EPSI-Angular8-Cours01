import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNameComponent } from './my-name/my-name.component';
import { MyFirstStageComponent } from './my-first-stage/my-first-stage.component';
import { MySecondStageComponent } from './my-second-stage/my-second-stage.component';
import { MySecondPageOneComponent } from './my-second-page-one/my-second-page-one.component';
import { MySecondPageTwoComponent } from './my-second-page-two/my-second-page-two.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNameComponent,
    MyFirstStageComponent,
    MySecondStageComponent,
    MySecondPageOneComponent,
    MySecondPageTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
