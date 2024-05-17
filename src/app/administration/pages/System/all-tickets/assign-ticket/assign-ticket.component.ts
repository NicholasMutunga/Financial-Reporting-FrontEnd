import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NotificationService } from 'src/@core/helpers/NotificationService/notification.service';
import { AssigneeLookupComponent } from 'src/app/administration/pages/lookups/assignee-lookup/assignee-lookup.component';
import { StatusLookupComponent } from 'src/app/administration/pages/lookups/status-lookup/status-lookup.component';
import { TicketLookupComponent } from '../../../lookups/ticket-lookup/ticket-lookup.component';
import { AssignServiceService } from './assign-service.service';
import { DatePipe } from '@angular/common';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-assign-ticket',
  templateUrl: './assign-ticket.component.html',
  styleUrls: ['./assign-ticket.component.scss']
})
export class AssignTicketComponent implements OnInit, OnDestroy {
  loading = false;
  function_type: string;
  results: any;
  fmData: any;
  submitted: boolean = false;
  submitting: boolean = false;
  onShowResults = false;
  btnColor: any;
  btnText: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  assignTicketAPI: any;
  lookupData: any;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private ticketAPI: AssignServiceService,
    private notificationAPI: NotificationService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
  }

  formData = this.fb.group({
    ticketsCode: ['', Validators.required],
    status: ['', Validators.required],
    assignee: ['', Validators.required],
    startDate: ['01/01/2024', Validators.required],
    endDate: ['01/01/2025', Validators.required]
  });

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  // onStartDateChange(event: MatDatepickerInputEvent<Date>) {
  //   const selectedDate = event.value;
  //   const formattedDate = this.datePipe.transform(selectedDate, 'dd/MM/yyyy');
  //   this.formData.get('startDate').setValue(formattedDate);
  // }

  // onendDateChange(event: MatDatepickerInputEvent<Date>) {
  //   const selectedDate = event.value;
  //   const formattedDate = this.datePipe.transform(selectedDate, 'dd/MM/yyyy');
  //   this.formData.get('endDate').setValue(formattedDate);
  // }


  onStartDateChange(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = event.value;
    const isoFormattedDate = selectedDate.toISOString();
    this.formData.get('startDate').setValue(isoFormattedDate);
  }

  onendDateChange(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = event.value;
    const isoFormattedDate = selectedDate.toISOString();
    this.formData.get('endDate').setValue(isoFormattedDate);
  }

  onSubmit() {
    this.loading = true;
    this.submitted = true;
    this.submitting = true;
      if (!this.formData.valid) {
        // Log errors for each form control
        Object.keys(this.formData.controls).forEach(key => {
          const controlErrors = this.formData.get(key).errors;
          if (controlErrors != null) {
            console.log(`Field '${key}' has the following errors: ${JSON.stringify(controlErrors)}`);
          }
        });

        this.notificationAPI.alertWarning("TICKET DATA IS INVALID");
        return;
      } else {
        this.ticketAPI.assignTicket(this.formData.value).pipe(takeUntil(this.destroy$)).subscribe(
          (data) => {
              this.loading = false;
              this.notificationAPI.alertSuccess(data.message);
              this.router.navigate([`/system/report/maintenance`], { skipLocationChange: true });
          }, (err) => {
            this.loading = false;
            this.submitting = false;
            console.log(err);
            this.notificationAPI.alertWarning("Server Error: !!");
          }
        );
      }
   }

  ticketCodeLookup(): void {
    const dialogRef = this.dialog.open(TicketLookupComponent, {
      width: "40%",
      autoFocus: false,
      maxHeight: '90vh'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.lookupData = result.data;
      console.log(this.lookupData);
      this.formData.controls.ticketsCode.setValue(this.lookupData.ticketsCode);
    });
  }

  assigneeCodeLookup(): void {
    const dialogRef = this.dialog.open(AssigneeLookupComponent, {
      width: "40%",
      autoFocus: false,
      maxHeight: '90vh'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.lookupData = result.data;
      this.formData.controls.assignee.setValue(this.lookupData.names);
    });
  }

  statusCodeLookup(): void {
    const dialogRef = this.dialog.open(StatusLookupComponent, {
      width: "40%",
      autoFocus: false,
      maxHeight: '90vh'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.lookupData = result.data;
      this.formData.controls.status.setValue(this.lookupData.statusCode);
    });
  }
}

