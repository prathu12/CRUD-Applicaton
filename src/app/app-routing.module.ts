import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudTableComponent } from './crud-table/crud-table.component';
import { CreateDataTableComponent } from './create-data-table/create-data-table.component';
import { UpdateDataComponent } from './update-data/update-data.component';

const routes: Routes = [
  {path:"", component:CrudTableComponent},
  {path:"crudTable", component:CrudTableComponent},
  {path:"createData", component:CreateDataTableComponent},
  {path:"update/:id", component:UpdateDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
