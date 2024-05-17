
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NotificationService } from 'src/@core/helpers/NotificationService/notification.service';
import { DataStoreService } from 'src/@core/helpers/data-store.service';
import { AssigneeLookupComponent } from '../../lookups/assignee-lookup/assignee-lookup.component';
import { AssigneeService } from '../../Configurations/assignee-config/assignee.service';

@Component({
  selector: 'app-assignee-maintenance',
  templateUrl: './assignee-maintenance.component.html',
  styleUrls: ['./assignee-maintenance.component.scss']
})
export class AssigneeMaintenanceComponent implements OnInit, OnDestroy {
  lookupData: any;
  assigneeCode: any;
  assigneeDescription: any;
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
    private assigneeAPI: AssigneeService,
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
    id: [''],
  });
  ngOnInit() {
    this.lookupData = {};
    this.randomCode = "AS" + Math.floor(Math.random() * (999 - 1));
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
      this.formData.controls.id.setValue('');
      // this.formData.controls.assigneeCode.setValue(this.randomCode);
    } else if (this.function_type !== 'ADD') {
      this.onShowSearchIcon = true;
      this.onsShowCode = true;
    }
  }
  get f() { return this.formData.controls; }

  onSubmit() {
    this.loading = true;
    this.submitted = true;
    this.submitting = true;
    if (this.formData.valid) {
      this.assigneeCode = this.formData.controls.id.value;
      this.router.navigate([`system/assignee/data/view`], { skipLocationChange: true, queryParams: { formData: this.formData.value, fetchData: this.lookupData } });
    }
    else if (this.formData.controls.function_type.value == "") {
      this.loading = false;
      this.submitted = true;
      this.submitting = false;
      this.notificationAPI.alertWarning("ASSIGNEE FUNCTION TYPE IS INVALID");
    }
    else if (this.formData.controls.id.value == "") {
      this.loading = false;
      this.submitted = true;
      this.submitting = false;
      this.notificationAPI.alertWarning("ASSIGNEE CODE IS INVALID");
    } else {
      this.loading = false;
      this.submitted = true;
      this.submitting = false;
      this.notificationAPI.alertWarning("CHOOSE FORM FUNCTION");
    }
  }

  assigneeCodeLookup(): void {
    const dialogRef = this.dialog.open(AssigneeLookupComponent, {
      width: "40%",
      autoFocus: false,
      maxHeight: '90vh'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.lookupData = result.data;
      this.assigneeCode = this.lookupData.id;
      this.assigneeDescription = this.lookupData.assigneeDescription;
      this.formData.controls.id.setValue(this.assigneeCode);
    });
  }
}
