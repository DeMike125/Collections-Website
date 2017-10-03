import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { BirdsInArt } from './app.component';
import { SearchPage } from '../pages/search/search';
import { DetailsPage } from '../pages/details/details';

@NgModule({
  declarations: [
    BirdsInArt,
    SearchPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(BirdsInArt)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BirdsInArt,
    SearchPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
