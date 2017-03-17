import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-meta',
  templateUrl: 'meta.html'
})
export class MetaPage {

  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MetaPage');
  }

  onClose(remove = false) {
      this.viewCtrl.dismiss(remove);
  }

}
