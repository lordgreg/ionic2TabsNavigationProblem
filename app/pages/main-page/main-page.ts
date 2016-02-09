import {App, Platform, Page, NavController} from 'ionic-framework/ionic';
import {TabsPage} from '../../pages/tabs/tabs';
/*
  Generated class for the MainPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/main-page/main-page.html',
})
export class MainPagePage {
  constructor(private nav: NavController) {
  }
  
  goToTabs() {
    this.nav.push(TabsPage);
  }
}
