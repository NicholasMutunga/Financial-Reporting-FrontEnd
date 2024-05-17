import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NotificationService } from 'src/@core/helpers/NotificationService/notification.service';
import { DataStoreService } from 'src/@core/helpers/data-store.service';
import { StatusLookupComponent } from '../../lookups/status-lookup/status-lookup.component';
import { StatusService } from '../../Configurations/status-config/status.service';

@Component({
  selector: 'app-status-maintenance',
  templateUrl: './status-maintenance.component.html',
  styleUrls: ['./status-maintenance.component.scss']
})
export class StatusMaintenanceComponent implements OnInit, OnDestroy {
  lookupData: any;
  statusCode: any;
  statusDescription: any;
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
    private statusAPI: StatusService,
    private dataStoreApi: DataStoreService,
    private notificationAPI: NotificationService
  ) {
    this.functionArray = this.dataStoreApi.getActionsByPrivilege("CONFIGURATIONS");
    this.functionArray = this.functionArray.filter(
      (arr: string) => arr === 'ADD' ||
        arr === 'INQUIRE' ||
        arr === 'MODIFY' ||
        arr === 'VERIFY' ||
        arr === 'REJECT' ||
        arr === 'STATEMENT');
  }
  formData = this.fb.group({
    function_type: ['', [Validators.required]],
    statusCode: ['', [Validators.required]],
  });
  ngOnInit() {
    this.lookupData = {};
    this.randomCode = "ST" + Math.floor(Math.random() * (999 - 1));
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
      this.formData.controls.statusCode.setValue(this.randomCode);
    } else if (this.function_type !== 'ADD') {
      this.onShowSearchIcon = true;
      this.onsShowCode = true;
      this.formData.controls.statusCode.setValue("");
    }
  }
  get f() { return this.formData.controls; }

  onSubmit() {
    this.loading = true;
    this.submitted = true;
    this.submitting = true;
    if (this.formData.valid) {
      this.statusCode = this.formData.controls.statusCode.value;
      if (this.function_type == 'ADD') {
        this.statusAPI.getCode(this.statusCode).pipe(takeUntil(this.destroy$)).subscribe(
          (data) => {
            if (data.statusCode === 404) {
              this.loading = false;
              this.router.navigate([`system/status/data/view`], { skipLocationChange: true, queryParams: { formData: this.formData.value, fetchData: this.lookupData } });
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
        this.router.navigate([`system/status/data/view`], { skipLocationChange: true, queryParams: { formData: this.formData.value, fetchData: this.lookupData } });
      }
    }
    else if (this.formData.controls.function_type.value == "") {
      this.loading = false;
      this.submitted = true;
      this.submitting = false;
      this.notificationAPI.alertWarning("STATUS FUNCTION TYPE IS INVALID");
    }
    else if (this.formData.controls.statusCode.value == "") {
      this.loading = false;
      this.submitted = true;
      this.submitting = false;
      this.notificationAPI.alertWarning("STATUS CODE IS INVALID");
    } else {
      this.loading = false;
      this.submitted = true;
      this.submitting = false;
      this.notificationAPI.alertWarning("CHOOSE FORM FUNCTION");
    }
  }

  statusCodeLookup(): void {
    const dialogRef = this.dialog.open(StatusLookupComponent, {
      width: "40%",
      autoFocus: false,
      maxHeight: '90vh'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.lookupData = result.data;
      this.statusCode = this.lookupData.statusCode;
      this.statusDescription = this.lookupData.statusDescription;
      this.formData.controls.statusCode.setValue(this.statusCode);
    });
  }
}