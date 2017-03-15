import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Meta } from "../../data/meta.interface";
import metas from '../../data/metas';

@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html'
})
export class CategoriasPage implements OnInit {

  metaCollection: { categoria: string, metas: Meta[], icon: string }[];

  ngOnInit() {
    this.metaCollection = metas;  
  }

}
