import { Component, OnInit } from '@angular/core';
import { CrudApiService } from '../crud-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css'],
})
export class CrudTableComponent implements OnInit {
  Users: any;
  item: any;
  constructor(private Api: CrudApiService, private route: Router) {}
  ngOnInit(): void {
    this.Api.getDataApi().subscribe((res) => {
      this.Users = res;
    });
  }
  _delete(idData: any) {
    this.Api.deleteDataApi(idData).subscribe((res) => {
      console.log(res);
    });
    location.reload();
  }
  _send(id: any) {
    console.log(id);
    this.route.navigate(['/update', id]);
  }
}
