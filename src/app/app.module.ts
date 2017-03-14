import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CategoriasPage } from '../pages/categorias/categorias';
import { MetasPage } from "../pages/metas/metas";
import { MetaPage } from "../pages/meta/meta";
import { CompromissoPage } from "../pages/compromisso/compromisso";
import { ConfiguracaoPage } from "../pages/configuracao/configuracao";
import { TabsPage } from "../pages/tabs/tabs";

@NgModule({
  declarations: [
    MyApp,
    CategoriasPage, 
    MetasPage, 
    MetaPage, 
    CompromissoPage, 
    ConfiguracaoPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CategoriasPage, 
    MetasPage, 
    MetaPage, 
    CompromissoPage, 
    ConfiguracaoPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
