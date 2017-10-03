import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {
  public items: any = [];
  public filteredItems: any = [];
  public filter: boolean = false;

  constructor(public navCtrl: NavController, public http: Http) {
    this.getData().subscribe((data) => {
      this.items = data;
    });
  }

  getData = () => {
    return this.http.get('../../assets/bia.json').map((res:Response) => res.json()); //records in this case
  }

  itemSelected = (item): void => {
    this.navCtrl.push(DetailsPage, {
      'item': item
    });
  }

  setFilteredItems = (search: string): void => {
    if(search) {
      this.filter = true;
    } else {
      this.filter = false;
    }

    this.filteredItems = [];
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
