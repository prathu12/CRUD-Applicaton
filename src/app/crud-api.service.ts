import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudApiService {

  constructor(private http : HttpClient) { }
  getDataApi(){
    return this.http.get('http://localhost:8000/showDatas')
  }
  sendDataApi(data:any){
    return this.http.post('http://localhost:8000/insert', data)
  }
  deleteDataApi(data:any){
    let obj = {id : data}
    return this.http.post('http://localhost:8000/delete', obj)
  }
  sendOneDataApi(id:any){
    let obj = {id : id}
    return this.http.post('http://localhost:8000/updateOneData', obj)
  }
  updateDataApi(data:any, id:any){
    data.id = id
    return this.http.post('http://localhost:8000/updateData', data)
  }
}
