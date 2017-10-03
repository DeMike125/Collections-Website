import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SearchPage } from '../pages/search/search';

@Component({
  templateUrl: 'app.html'
})

/**
 * BirdsInArt
 * Date Last Modified: October 3, 2017
 * @author Austin Walhof
 */
export class BirdsInArt {
  public rootPage: any = SearchPage; /* The page loaded when the app starts. */

  /**
   * BirdsInArt (App Entry Point)
   * @param  {Platform}     platform     The Platform service can be used to get information about your current device.
   * @param  {StatusBar}    statusBar    Manage the appearance of the native status bar.
   * @param  {SplashScreen} splashScreen This plugin displays and hides a splash screen during application launch.
   */
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    /* Called when the Platform is ready, meaning our plugins are available.
     * Since the StatusBar and SplashScreen are plugins, it is now safe to configure them. */
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
