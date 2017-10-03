import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-details', templateUrl: 'details.html'
})

/**
 * DetailsPage
 * Date Last Modified: October 3, 2017
 * @author Austin Walhof
 */
export class DetailsPage {
  public item: any;
  public image: string;

  /**
   * DetailsPage
   * @param  {NavParams} navParams Exists on a page and can contain data for that particular view.
   */
  constructor(private navParams: NavParams) {
    this.item = navParams.get('item'); /* The item the user clicked on is passed thru the NavParams. */
  }
}
