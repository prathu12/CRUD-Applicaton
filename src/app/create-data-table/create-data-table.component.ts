import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CrudApiService } from '../crud-api.service';

@Component({
  selector: 'app-create-data-table',
  templateUrl: './create-data-table.component.html',
  styleUrls: ['./create-data-table.component.css']
})
export class CreateDataTableComponent implements OnInit{
  formData:any;
  constructor(private forms:FormBuilder, private sendDataToApi : CrudApiService){}
  ngOnInit(): void {
    this.formData = this.forms.group({
      name:[''],
      email:[''],
      course:['']
    })
  }
sbForm(){
  this.sendDataToApi.sendDataApi(this.formData.value).subscribe((result)=>{
    console.log(result);
    
  })
}
}
