import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { ManageTicketsServiceService } from '../../System/all-tickets/manage-tickets/manage-tickets-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/@core/helpers/NotificationService/notification.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-manage-ticket-lookup',
  templateUrl: './manage-ticket-lookup.component.html',
  styleUrls: ['./manage-ticket-lookup.component.scss']
})
export class ManageTicketLookupComponent implements OnInit {

  displayedColumns: string[] = ['id','index', 'title', 'description'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  data: any;
  respData: any;
  loading: boolean = false;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private manageAPI: ManageTicketsServiceService,
    private notificationAPI: NotificationService,
    public dialogRef: MatDialogRef<ManageTicketLookupComponent>
  ) { }

  ngOnInit() {
    this.getData();
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  getData() {
    this.loading = true;
    this.manageAPI.find().pipe(takeUntil(this.destroy$)).subscribe(
      (data) => {
        if (data.statusCode === 302) {
          console.log("fetched", data);
          this.respData = data.entity;
          console.log("fetched", this.respData);
          this.loading = false;
          this.dataSource = new MatTableDataSource(this.respData);
          console.log("datasource {}", this.dataSource)
          this.dataSource.paginator = this.paginator;
        } else {
          this.loading = false;
        }
      }, (err) => {
        this.loading = false;
        this.notificationAPI.alertWarning("Server Error: !!");
      }
    );
  }

  onSelect(data: any) {
    this.dialogRef.close({ event: 'close', data: data });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
