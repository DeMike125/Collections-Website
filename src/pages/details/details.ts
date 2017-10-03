import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})

export class DetailsPage {
  public item: any;
  public image: string;

  constructor(private navParams: NavParams) {
    this.item = navParams.get('item');
  }
}
