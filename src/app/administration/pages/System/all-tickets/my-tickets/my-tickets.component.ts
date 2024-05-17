import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/@core/helpers/NotificationService/notification.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ReportIssueService } from '../../../report-issue/report-issue.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ManageTicketsServiceService } from '../manage-tickets/manage-tickets-service.service';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.scss']
})
export class MyTicketsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['index', 'ticketsCode', 'institution', 'title', 'raisedBy', 'contact', 'email','category','priority', 'status', 'actions'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) dataSourcePaginator!: MatPaginator;
  @ViewChild(MatSort) dataSourceSort!: MatSort;

  loadingTicketData: boolean = false;
  submitted: boolean = false;
  submitting: boolean = false;
  destroy$: Subject<void> = new Subject<void>();
  loading: boolean = false;
  results:  any;
  data: any;

  constructor(
    private notificationAPI: NotificationService,
    private router: Router,
    private reportService: ReportIssueService,
    private dialog:MatDialog,
    private ticketService: ManageTicketsServiceService,

  ) {  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.loadingTicketData = true;
    this.reportService.find()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res) => {
          if (res.statusCode === 302) {
            this.results = res.entity
            this.dataSource = new MatTableDataSource(this.results);
            console.log("res", res)
            console.log("datasource", this.dataSource)
            this.dataSource.paginator = this.dataSourcePaginator;
            this.dataSource.sort = this.dataSourceSort;
          }
          this.loadingTicketData = false;
        },
        (error) => {
          this.loadingTicketData = false;
          this.notificationAPI.alertWarning("Server Error: " + error.message);
        }
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // viewTicketDetails(ticketsCode: any) {
  //   const ticket=this.reportService.getCode(ticketsCode);
  //   this.router.navigate([`system/view-ticket`],
  //   {

  //     skipLocationChange: true,
  //     queryParams: { formData:  {
  //       ticketsCode: ticketsCode,
  //    }, fetchedData: this.data} });
  // }

  viewTicketDetails(ticketCode: any) {
    this.ticketService.getCode(ticketCode).subscribe(
      (ticket: any) => {
        if (ticket && ticket.entity) {
          this.router.navigate([`system/view-ticket`], {
            queryParams: {
              ticketCode: ticketCode, // Pass ticketCode to view-ticket route
              ticketData: JSON.stringify(ticket.entity) // Pass ticket entity as string
            }
          });
        } else {
          console.error(`Ticket with code ${ticketCode} not found.`);
          // Handle error or show message if ticket data is not available
        }
      },
      (error) => {
        console.error(`Error fetching ticket with code ${ticketCode}:`, error);
        // Handle error or show message
      }
    );
  }
}
