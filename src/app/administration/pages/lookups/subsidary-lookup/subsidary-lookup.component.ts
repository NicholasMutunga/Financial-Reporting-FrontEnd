import { Component, OnInit } from '@angular/core';
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-subsidary-lookup',
  templateUrl: './subsidary-lookup.component.html',
  styleUrls: ['./subsidary-lookup.component.scss']
})
export class SubsidaryLookupComponent implements OnInit {
displayedColumns:string[]= [ 'id', 'CompanyName','Entityid','postedBy','postedTime'];
loading:false;
dataSource: any[];
  constructor() { }
applyFilter($event){}
  ngOnInit(): void {
  }

}
