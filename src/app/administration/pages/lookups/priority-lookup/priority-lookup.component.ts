import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { NotificationService } from "src/@core/helpers/NotificationService/notification.service";
import { PriorityService } from "../../Configurations/priority-config/priority.service";

@Component({
  selector: 'app-priority-lookup',
  templateUrl: './priority-lookup.component.html',
  styleUrls: ['./priority-lookup.component.scss']
})
export class PriorityLookupComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['index', 'priorityCode', 'title', 'description', 'verifiedFlag'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  data: any;
  respData: any;
  loading: boolean = false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private priorityAPI: PriorityService,
    private notificationAPI: NotificationService,
    public dialogRef: MatDialogRef<PriorityLookupComponent>
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
    this.priorityAPI.find().pipe(takeUntil(this.destroy$)).subscribe(
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
