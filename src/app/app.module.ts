import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudTableComponent } from './crud-table/crud-table.component';
import { CreateDataTableComponent } from './create-data-table/create-data-table.component';
import { CrudApiService } from './crud-api.service';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateDataComponent } from './update-data/update-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudTableComponent,
    CreateDataTableComponent,
    UpdateDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CrudApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
