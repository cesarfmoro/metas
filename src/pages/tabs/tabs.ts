import { Component } from '@angular/core';
import { CategoriasPage } from '../categorias/categorias';
import { CompromissoPage } from '../compromisso/compromisso';

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="compromissoPage" tabTitle="Compromisso" tabIcon="body"></ion-tab>
      <ion-tab [root]="categoriasPage" tabTitle="Categorias" tabIcon="albums"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {

  compromissoPage = CompromissoPage;
  categoriasPage = CategoriasPage;

}

