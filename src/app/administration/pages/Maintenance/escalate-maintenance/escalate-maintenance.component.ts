import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NotificationService } from 'src/@core/helpers/NotificationService/notification.service';
import { DataStoreService } from 'src/@core/helpers/data-store.service';
import { TicketLookupComponent } from '../../lookups/ticket-lookup/ticket-lookup.component';
import { EscalateLookupComponent } from '../../lookups/escalate-lookup/escalate-lookup.component';
import { EscalateIssueService } from '../../escalate-issue/escalate-issue.service';
import { ReportIssueService } from '../../report-issue/report-issue.service';


@Component({
  selector: 'app-escalate-maintenance',
  templateUrl: './escalate-maintenance.component.html',
  styleUrls: ['./escalate-maintenance.component.scss']
})
export class EscalateMaintenanceComponent implements OnInit, OnDestroy {
  lookupData: any;
  ticketsCode: any;
  escalateCode: any;
  priorityDescription: any;
  loading = false;
  submitted = false;
  onShowSearchIcon = false;
  functionArray: any;
  error: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  function_type: any;
  results: any;
  randomCode: any;
  onsShowCode: boolean = false;
  submitting: boolean = false;
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    
    private dataStoreApi: DataStoreService,
    private notificationAPI: NotificationService,
    private escalateAPI: EscalateIssueService,
  ) {
    this.functionArray = this.dataStoreApi.getActionsByPrivilege("CONFIGURATIONS");
    this.functionArray = this.functionArray.filter(
      (arr: string) => arr === 'ADD' ||
        arr === 'INQUIRE');
  }
  formData = this.fb.group({
    function_type: ['', [Validators.required]],
    escalateCode: ['', [Validators.required]],
    ticketsCode:['',[Validators.required]]
  });
  ngOnInit() {
    this.lookupData = {};
    this.randomCode = "ES" + Math.floor(Math.random() * (999 - 1));
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
 onSelectFunction(event: any) {
    this.function_type = event.target.value;
    if (this.function_type == 'ADD') {
      this.onShowSearchIcon = false;
      this.onsShowCode = true;
      this.formData.controls.escalateCode.setValue(this.randomCode);
    } else if (this.function_type !== 'ADD') {
      this.onShowSearchIcon = true;
      this.onsShowCode = true;
      this.formData.controls.escalateCode.setValue("");
    }
  }
  get f() { return this.formData.controls; }

  onSubmit() {
    this.loading = true;
    this.submitted = true;
    this.submitting = true;
    if (this.formData.valid) {
      this.ticketsCode = this.formData.controls.ticketsCode.value;
      this.escalateCode = this.formData.controls.escalateCode.value;
      if (this.function_type == 'ADD') {
        this.escalateAPI.getCode(this.escalateCode).pipe(takeUntil(this.destroy$)).subscribe(
          (data) => {
            if (data.statusCode === 404) {
              this.loading = false;
              this.router.navigate([`system/escalate-issue`], { skipLocationChange: true, queryParams: { formData: this.formData.value, fetchData: this.lookupData } });
            } else if (
              data.statusCode === 200) {
              this.loading = false;
              this.submitting = false;
              this.results = data;
              this.notificationAPI.alertWarning(this.results.message);
              
             
            }
          },
          (err) => {
            this.loading = false;
            this.submitting = false;
            this.notificationAPI.alertWarning("Server Error: !!");
          }
        )
      } else if (this.function_type !== 'ADD') {
        this.router.navigate([`system/escalate-issue`], { skipLocationChange: true, queryParams: { formData: this.formData.value, fetchData: this.lookupData } });
      }
    }
    else if (this.formData.controls.function_type.value == "") {
      this.loading = false;
      this.submitted = true;
      this.submitting = false;
      this.notificationAPI.alertWarning("ESCALATE FUNCTION TYPE IS INVALID");
    }
    else if (this.formData.controls.escalateCode.value == "") {
      this.loading = false;
      this.submitted = true;
      this.submitting = false;
      this.notificationAPI.alertWarning("ESCALATE CODE IS INVALID");
    } else {
      this.loading = false;
      this.submitted = true;
      this.submitting = false;
      this.notificationAPI.alertWarning("CHOOSE FORM FUNCTION");
    }
  }
 
  
  
  ticketsCodeLookup(): void {
    const dialogRef = this.dialog.open(TicketLookupComponent, {
      width: "40%",
      autoFocus: false,
      maxHeight: '90vh'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.lookupData = result.data;
      console.log(this.lookupData);
      this.ticketsCode = this.lookupData.ticketsCode;
      this.priorityDescription = this.lookupData.priorityDescription;
      this.formData.controls.ticketsCode.setValue(this.ticketsCode);
    });
  }

  escalateCodeLookup(): void {
    const dialogRef = this.dialog.open(EscalateLookupComponent, {
      width: "40%",
      autoFocus: false,
      maxHeight: '90vh'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.lookupData = result.data;
      console.log(this.lookupData);
      this.escalateCode = this.lookupData.escalateCode;
      this.priorityDescription = this.lookupData.priorityDescription;
      this.formData.controls.escalateCode.setValue(this.escalateCode);
    });
  }
}