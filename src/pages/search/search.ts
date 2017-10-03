import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import 'rxjs/add/operator/map'; /* Not sure why this isn't imported by default, but we need it to load the json data. */

@Component({
  selector: 'page-search', templateUrl: 'search.html'
})

/**
 * SearchPage
 * Date Last Modified: October 3, 2017
 * @author Austin Walhof
 */
export class SearchPage {
  public items: any = []; /* Holds each artwork defined in the json file */
  public filteredItems: any = []; /* Holds each artwork matching the search terms. */
  public filter: boolean = false; /* True when the search bar contains text, false otherwise. */

  /**
   * SearchPage
   * @param {NavController} navCtrl Array of pages representing a particular history. This can be manipulated to navigate throughout an app by pushing and popping pages.
   * @param {Http}          http    Plugin for communicating with HTTP servers.
   */
  constructor(public navCtrl: NavController, public http: Http) {
    /* Called when the json data has been loaded from disk. */
    this.getData().subscribe((data) => {
      this.items = data;
    });
  }

  /**
   * GetData
   * @return {Promise} for the json data.
   */
  getData = () => {
    return this.http.get('../../assets/bia.json').map((res:Response) => res.json()); //records in this case
  }

  /**
   * ItemSelected
   * @param {Object} item that was selected by the user.
   */
  itemSelected = (item): void => {
    /* Show a details page and pass it the item selected by the user. */
    this.navCtrl.push(DetailsPage, {
      'item': item
    });
  }

  /**
   * SetFilteredItems
   * @param {String} search keywords entered into the search bar.
   */
  setFilteredItems = (search: string): void => {
    this.filteredItems = []; /* Clear results from the last search.*/
    if(search) {
      this.filter = true;
    } else {
      this.filter = false;
    }
    for(var i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      let titleMatch = item["Title"].toString().toLowerCase().includes(search.toLowerCase());
      let nationalityMatch = item["Nationality"].toString().toLowerCase().includes(search.toLowerCase());
      let artistNameMatch = item["First Name"].toString().toLowerCase().includes(search.toLowerCase());
      let artistNameMatchLast = item["Last Name"].toString().toLowerCase().includes(search.toLowerCase());
      let mediumMatch = item["Medium"].toString().toLowerCase().toString().includes(search.toLowerCase());
      let yearMatch = item["Year"].toString().includes(search.toLowerCase());
      let exhibitionMatch = item["Birds in Art anniversary"].toString().toLowerCase().includes(search.toLowerCase());
      let speciesMatch = item["Species"].toString().toLowerCase().includes(search.toLowerCase());
      let sourceMatch = item["Source of Acquisition"].toString().toLowerCase().includes(search.toLowerCase());
      if(titleMatch || nationalityMatch || artistNameMatch || artistNameMatchLast || mediumMatch || yearMatch || exhibitionMatch || speciesMatch || sourceMatch) {
        this.filteredItems.push(item);
      }
    }
  }
}
