import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Meta } from "../../data/meta.interface";
import { MetasService } from "../../services/metas";
import { MetaPage } from "../meta/meta";


@Component({
  selector: 'page-compromisso',
  templateUrl: 'compromisso.html'
})
export class CompromissoPage {

  metas: Meta[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private metaService: MetasService, private modalCtrl: ModalController) {

  }

  ionViewWillEnter() {
    this.metas=this.metaService.getMetasSelecionadas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompromissoPage');
  }

  onViewMeta(meta: Meta) {
    const modal = this.modalCtrl.create(MetaPage);
    modal.present();
  }

}
