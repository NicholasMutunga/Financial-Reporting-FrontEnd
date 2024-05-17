import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { DataStoreService } from 'src/@core/helpers/data-store.service';
import { ReportsService } from 'src/app/administration/Service/reports/reports.service';
import { DynamicReportLookupComponent } from '../dynamic-report-lookup/dynamic-report-lookup.component';

export interface ReportInterface {
  name: string;
  authName?: string;
  filename?: string;
  isDynamic?: boolean;
  requiredFields?: string[];
  displays?: string[];
  conversionsFrom?: string[];
  conversionsTo?: string[];
  alternatives?: any[];
  defaults?: any;
  display: boolean;
}

export interface ReportCategory {
  title: string;
  display: boolean;
  specificReports: ReportInterface[];
}

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.scss'],
})
export class ViewReportComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  reports!: any;
  subscription!: Subscription;
  error: any;
  loading = false;
  displayReport = false;
  displayContents: string;
  AccountStatements = false;
  actionsArray: any[];
  RetailAccountReports = false;
  retailcustomerreport = false;
  searchTerm = '';
  reportDisplay: ReportCategory[];
  authReportDisplay: ReportCategory[];
  uiReports: ReportCategory[];
  corporateAccountsreport: boolean = true;
  groupAccountsreport: boolean = true;
  ChartsOfAccounts: any;

  constructor(
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private reportsService: ReportsService,
    private dataStoreApi: DataStoreService
  ) {
    this.iniAuthorization();
  }
  ngOnInit(): void {}

  iniAuthorization() {
    console.log('Init auth');
    this.actionsArray = this.dataStoreApi.getActions('REPORTS');
    for (let i = 0; i < this.actionsArray.length; i++) {
      let obj = this.actionsArray[i];
      if (!this.retailcustomerreport)
        this.retailcustomerreport = obj.name == 'RETAIL CUSTOMER REPORT';
     }

    this.initDisplay();
    this.sortAuthReports();
    this.uiReports = this.authReportDisplay;
  }

  sortAuthReports() {
    var tempDisplay: ReportCategory[] = [];
    this.reportDisplay.forEach((element) => {
      if (!element.display) {
      } else {
        var newElement: ReportCategory = JSON.parse(JSON.stringify(element));
        newElement.specificReports = [];
        element.specificReports.forEach((report) => {
          if (report.display) {
            newElement.specificReports.push(report);
          }
        });
        if (newElement.specificReports.length > 0) {
          tempDisplay.push(newElement);
        }
      }
    });
    this.authReportDisplay = tempDisplay;
  }

  onSearchChange() {
    this.search();
  }

  search() {
    var tempDisplay: ReportCategory[] = [];
    this.authReportDisplay.forEach((element) => {
      if (
        element.title.toUpperCase().indexOf(this.searchTerm.toUpperCase()) !==
        -1
      ) {
        tempDisplay.push(element);
      } else {
        var newElement: ReportCategory = JSON.parse(JSON.stringify(element));
        newElement.specificReports = [];
        element.specificReports.forEach((report) => {
          if (
            report.name.toUpperCase().indexOf(this.searchTerm.toUpperCase()) !==
            -1
          ) {
            newElement.specificReports.push(report);
          }
        });
        if (newElement.specificReports.length > 0) {
          tempDisplay.push(newElement);
        }
      }
    });
    this.uiReports = tempDisplay;
  }

  toDynamicReport = (report: ReportInterface): void => {
    console.log('To dynamic report');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '800px';
    dialogConfig.data = {
      report: report,
      reportTitle: report.name,
    };
    const dialogRef = this.dialog.open(
      DynamicReportLookupComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result != null && result.event == 'display') {
        this.displayReport = true;
        this.displayContents = result;
      }
    });
  };

  initDisplay = (): void => {
    console.log(this.retailcustomerreport);
    this.reportDisplay = [
      {
        title: 'Ticket Reports',
        display: true,
        specificReports: [
          {
            isDynamic: true,
            requiredFields: ['fromdate', 'todate'],
            filename: 'all_members.jrxml',
            name: 'Customer Report',
            display: this.retailcustomerreport,
          },
          {
            isDynamic: true,
            requiredFields: ['fromdate', 'todate'],
            filename: 'real_members.jrxml',
            name: 'Category Report',
            display: this.retailcustomerreport,
          },
          {
            isDynamic: true,
            requiredFields: ['fromdate', 'todate'],
            filename: 'member_by_category.jrxml',
            name: 'Ticket Assignee Report',
            display: this.retailcustomerreport,
          },
          {
            isDynamic: true,
            requiredFields: ['fromdate', 'todate'],
            filename: 'all_members.jrxml',
            name: 'All Ticket REPORT',
            display: this.retailcustomerreport,
          },
          {
            isDynamic: true,
            requiredFields: ['fromdate', 'todate'],
            filename: 'all_members.jrxml',
            name: 'Ticket Status REPORT',
            display: this.retailcustomerreport,
          },
          {
            isDynamic: true,
            requiredFields: ['fromdate', 'todate'],
            filename: 'all_members.jrxml',
            name: 'Institution Ticket REPORT',
            display: this.retailcustomerreport,
          },
        ],
      }, 
    ];
  };
}
