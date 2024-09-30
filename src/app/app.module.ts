import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SelectInputFilterableModule } from "./modules/select-input-filter/select-input-filterable.module";
import { AppComponent } from './app.component';
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SelectInputFilterableModule,
    MatSelectModule,
    MatOptionModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
