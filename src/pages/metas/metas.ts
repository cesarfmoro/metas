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
    this.categoriaMetas = this.navParams.data;
  }

  //ionViewDidLoad() {
  //  this.categoriaMetas = this.navParams.data;
  //}
  //É preciso adicionar o Elvis operator ? para usar essa abordagem

  onSeleciona(meta: Meta) {


    
  }


}
