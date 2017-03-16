import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Meta } from "../../data/meta.interface";
import { MetasService } from "../../services/metas";

@Component({
  selector: 'page-metas',
  templateUrl: 'metas.html'
})
export class MetasPage implements OnInit{

  categoriaMetas: { categoria: string, metas: Meta[], icon: string };

  constructor(private navParams: NavParams, private alertCtrl: AlertController, private metasService: MetasService) {

  }

  ngOnInit() {
    this.categoriaMetas = this.navParams.data;
  }

  //ionViewDidLoad() {
  //  this.categoriaMetas = this.navParams.data;
  //}
  //É preciso adicionar o Elvis operator ? para usar essa abordagem

  onSeleciona(meta: Meta) {
    const alert = this.alertCtrl.create({
      title: 'Seleciona Meta',
      subTitle: 'Confirmação',
      message: 'Tem certeza que quer selecionar essa meta?',
      buttons: [{
        text: "Sim",
        handler: () => {
          this.metasService.selecionaMeta(meta);
        }
      },
      {
        text: "Não",
        role: "cancel",
        handler: () => {
          console.log("Não");
        }
      }]
    });

    alert.present();
  }


}
