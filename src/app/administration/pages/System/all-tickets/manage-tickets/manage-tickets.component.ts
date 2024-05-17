import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { NotificationService } from 'src/@core/helpers/NotificationService/notification.service';
import { ManageTicketsServiceService } from './manage-tickets-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DataStoreService } from 'src/@core/helpers/data-store.service';
import { TicketLookupComponent } from '../../../lookups/ticket-lookup/ticket-lookup.component';

@Component({
  selector: 'app-manage-tickets',
  templateUrl: './manage-tickets.component.html',
  styleUrls: ['./manage-tickets.component.scss']
})
export class ManageTicketsComponent implements OnInit, OnDestroy {

  lookupData: any;
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
  ticketsCode: any;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private dataStoreApi: DataStoreService,
    private notificationAPI: NotificationService
  ) {
    this.functionArray = this.dataStoreApi.getActionsByPrivilege("CONFIGURATIONS");
    this.functionArray = this.functionArray.filter(
      (arr: string) => arr === 'INQUIRE' || arr === 'MODIFY');
   }

  ngOnInit() {
    this.lookupData = {};
  }

  formData = this.fb.group({
    function_type: ['', [Validators.required]],
    ticketsCode: ['', [Validators.required]],
  });

  onSelectFunction(event: any) {
    this.function_type = event.target.value;
    if (this.function_type !== 'ADD') {
      this.onShowSearchIcon = true;
      this.onsShowCode = true;
      this.formData.controls.ticketsCode.setValue("");
    }
  }

  get f() { return this.formData.controls; }
  
  onSubmit() {
    this.loading = true;
    this.submitted = true;
    this.submitting = true;
    if (this.formData.valid) {
      if (this.function_type !== 'ADD') {
        this.router.navigate([`/system/manage-ticket/manage-ticket-maintenance`], { skipLocationChange: true, queryParams: { formData: this.formData.value, fetchData: this.lookupData } });
      }
    }
    else if (this.formData.controls.function_type.value == "") {
      this.loading = false;
      this.submitted = true;
      this.submitting = false;
      this.notificationAPI.alertWarning("TICKET FUNCTION TYPE IS INVALID");
    }
    else if (this.formData.controls.ticketsCode.value == "") {
      this.loading = false;
      this.submitted = true;
      this.submitting = false;
      this.notificationAPI.alertWarning("TICKET CODE IS INVALID");
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


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
