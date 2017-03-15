import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Meta } from "../../data/meta.interface";

@Component({
  selector: 'page-metas',
  templateUrl: 'metas.html'
})
export class MetasPage implements OnInit{

  categoriaMetas: { categoria: string, metas: Meta[], icon: string };

  constructor(private navParams: NavParams) {

  }

  ngOnInit() {
    console.log("categoria = " +this.navParams.data);
    this.categoriaMetas = this.navParams.data;
    console.log("categoriaMetas = " + this.categoriaMetas.categoria);
    console.log("metas= " + this.categoriaMetas.metas);

  }

  //ionViewDidLoad() {
  //  this.categoriaMetas = this.navParams.data;
  //}
  //É preciso adicionar o Elvis operator ? para usar essa abordagem
}
