import {Page, NavController} from 'ionic-framework/ionic';
import {MainPagePage} from '../../pages/main-page/main-page';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  constructor(private nav: NavController) {
  }
  
  goToMain() {
    this.nav.pop(MainPagePage);
  }
}
