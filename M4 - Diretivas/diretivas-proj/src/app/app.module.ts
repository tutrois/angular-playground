//Imports: arquivos importados da biblioteca
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'

//Declarations: Componentes
import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';
import { CompAtributosComponent } from './component/comp-atributos/comp-atributos.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CompAtributosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
