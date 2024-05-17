import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/@core/helpers/NotificationService/notification.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PriorityLookupComponent } from '../lookups/priority-lookup/priority-lookup.component';
import { MatDialog } from '@angular/material/dialog';
import { CategoryLookupComponent } from '../lookups/category-lookup/category-lookup.component';
import { EscalateIssueService } from './escalate-issue.service';
import { ReportIssueService } from '../report-issue/report-issue.service';

@Component({
  selector: 'app-escalate-issue',
  templateUrl: './escalate-issue.component.html',
  styleUrls: ['./escalate-issue.component.scss']
})
export class EscalateIssueComponent implements OnInit, OnDestroy {
  loading = false;
  lookupData: any;
  category: any;
  priority: any;
  function_type: string;
  selectedFile: File | null = null; 
  escalateCode: any;
  error: any;
  results: any;
  fmData: any;
  ticketResult: any;
  submitted = false;
  onShowResults = false;
  hideBtn = false;
  btnColor: any;
  btnText: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  submitting: boolean = false;
  showWarning: boolean = true;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private notificationAPI: NotificationService,
    private escalateAPI: EscalateIssueService,
    private ticketAPI: ReportIssueService,
  ) {
    this.fmData = this.router.getCurrentNavigation().extras.queryParams.formData;
    this.function_type = this.fmData.function_type;
    this.escalateCode = this.fmData.escalateCode;
  }

  ngOnInit() {
    this.getPage();
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  formData = this.fb.group({
    title: ['', Validators.required],
    escalateCode: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    priority: ['', Validators.required],
  });
  
  disabledFormControll() {
    this.formData.disable();
    this.showWarning = false;
  }
  get f() {
    return this.formData.controls;
  }
  getData() {
    this.loading = true;
    this.escalateAPI.getCode(this.fmData.escalateCode).pipe(takeUntil(this.destroy$)).subscribe(
      {
        next: (res) => {
          if (res.statusCode === 200) {

            this.loading = false;
            this.results = res.entity;
            console.log("results", this.results)
            this.formData = this.fb.group({
              escalateCode: [this.escalateCode],
              title: [this.results.title],
              description: [this.results.description],
              category: [this.results.category],
              priority: [this.results.priority],
            });
          } else {
            this.loading = false;
            this.notificationAPI.alertWarning("ESCALATE RECORDS NOT FOUND");
            this.router.navigate([`/system/escalate/maintenance`], { skipLocationChange: true });
          }
        },
        error: (err) => {
          this.loading = false;
          this.notificationAPI.alertWarning("ESCALATE SERVER ERROR");
        },
        complete: () => {

        }
      }
    )
  }

  getTicketData() {
    this.loading = true;
    this.ticketAPI.getCode(this.fmData.ticketsCode).pipe(takeUntil(this.destroy$)).subscribe(
      {
        next: (res) => {
          if (res.statusCode === 200) {

            this.loading = false;
            this.ticketResult = res.entity;
            console.log("tickettttt", this.ticketResult)
            this.formData = this.fb.group({
              escalateCode: [this.escalateCode],
              title: [this.ticketResult.title],
              description: [this.ticketResult.description],
              category: [this.ticketResult.category],
              priority: [this.ticketResult.priority],
            });
          } else {
            this.loading = false;
            this.notificationAPI.alertWarning("ESCALATE RECORDS NOT FOUND");
            this.router.navigate([`/system/escalate/maintenance`], { skipLocationChange: true });
          }
        },
        error: (err) => {
          this.loading = false;
          this.notificationAPI.alertWarning("ESCALATE SERVER ERROR");
        },
        complete: () => {

        }
      }
    )
  }

  getPage() {
    if (this.function_type == "ADD") {
      // this.formData = this.fb.group({
      //   escalateCode: [this.escalateCode],
      //   title: ['', Validators.required],
      //   description: ['', Validators.required],
      //   category: ['', Validators.required],
      //   priority: ['', Validators.required],
      // });
      this.getTicketData();
      this.onShowResults = true;
      this.btnColor = 'primary';
      this.btnText = 'SUBMIT';
    }
    else if (this.function_type == "INQUIRE") {
      this.getData();
      this.onShowResults = true;
      this.disabledFormControll();
    }
    
  }  
  
  onSubmit() {
    this.loading = true;
    this.submitted = true;
    this.submitting = true;
    if (this.function_type == "ADD") {
      if (!this.formData.valid) {
        // Log errors for each form control
        Object.keys(this.formData.controls).forEach(key => {
          const controlErrors = this.formData.get(key).errors;
          if (controlErrors != null) {
            console.log(`Field '${key}' has the following errors: ${JSON.stringify(controlErrors)}`);
          }
        });
  
        this.notificationAPI.alertWarning("ESCALATE DATA IS INVALID");
        return;
      } else {
        console.log("sending", this.formData.value)
        this.escalateAPI.create(this.formData.value).pipe(takeUntil(this.destroy$)).subscribe(
          (data) => {
              this.loading = false;
              this.notificationAPI.alertSuccess(data.message);
              this.router.navigate([`/system/escalate/maintenance`], { skipLocationChange: true });
          }, (err) => {
            this.loading = false;
            this.submitting = false;
            console.log(err);
            this.notificationAPI.alertWarning("Server Error: !!");
          }
        );
      }
    }
  }

  priorityCodeLookup(): void {
    const dialogRef = this.dialog.open(PriorityLookupComponent, {
      width: "40%",
      autoFocus: false,
      maxHeight: '90vh'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.lookupData = result.data;
      this.formData.controls.priority.setValue(this.lookupData.title);
    });
  }

  categoryCodeLookup(): void {
    const dialogRef = this.dialog.open(CategoryLookupComponent, {
      width: "40%",
      autoFocus: false,
      maxHeight: '90vh'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.lookupData = result.data;
      this.formData.controls.category.setValue(this.lookupData.title);
    });
  }
}
