import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  items = [
    'Beijing',
    'Shandong',
    'Henan',
    'Guangzhou',
    'Sichuan',
    'Shanxian',
    'Helongjiang',
    'Hunan',
    'Hainan',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
