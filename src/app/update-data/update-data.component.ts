import { Component, OnInit } from '@angular/core';
import { CrudApiService } from '../crud-api.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit{
  updateData:any;
  singleData:any
  constructor(private Api:CrudApiService, private active:ActivatedRoute, private form:FormBuilder){}
  ngOnInit(): void {
    this.updateData = this.form.group({
      name:[''],
      email:[''],
      course:['']
    })
    this.singleData = this.active.snapshot.params['id']
    this.Api.sendOneDataApi(this.singleData).subscribe((res)=>{
      this.singleData = res
      console.log(this.singleData);
      
    })
  }
  subForm(id:any){
    this.Api.updateDataApi(this.updateData.value, id).subscribe((res)=>{
      console.log(res);
      
    })
  }


}
