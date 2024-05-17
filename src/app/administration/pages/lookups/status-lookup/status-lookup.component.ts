import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { NotificationService } from "src/@core/helpers/NotificationService/notification.service";
import { StatusService } from "../../Configurations/status-config/status.service";

@Component({
  selector: 'app-status-lookup',
  templateUrl: './status-lookup.component.html',
  styleUrls: ['./status-lookup.component.scss']
})
export class StatusLookupComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['index', 'statusCode', 'title', 'description', 'verifiedFlag'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  data: any;
  respData: any;
  loading: boolean = false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private statusAPI: StatusService,
    private notificationAPI: NotificationService,
    public dialogRef: MatDialogRef<StatusLookupComponent>
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
    this.statusAPI.find().pipe(takeUntil(this.destroy$)).subscribe(
      (data) => {
        if (data.statusCode === 302) {
          console.log("fetched", data);
          this.respData = data.entity;
          console.log("fetched", this.respData);
          this.loading = false;
          this.dataSource = new MatTableDataSource(this.respData);
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
