import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { NotificationService } from 'src/@core/helpers/NotificationService/notification.service';
import { ManageTicketsServiceService } from '../manage-tickets-service.service';
import { ManageTicketLookupComponent } from 'src/app/administration/pages/lookups/manage-ticket-lookup/manage-ticket-lookup.component';
import { takeUntil } from 'rxjs/operators';
import { CategoryLookupComponent } from 'src/app/administration/pages/lookups/category-lookup/category-lookup.component';
import { MatDialog } from '@angular/material/dialog';
import { AssigneeLookupComponent } from 'src/app/administration/pages/lookups/assignee-lookup/assignee-lookup.component';
import { PriorityLookupComponent } from 'src/app/administration/pages/lookups/priority-lookup/priority-lookup.component';

@Component({
  selector: 'app-manage-ticket-maintenance',
  templateUrl: './manage-ticket-maintenance.component.html',
  styleUrls: ['./manage-ticket-maintenance.component.scss']
})
export class ManageTicketMaintenanceComponent implements OnInit {
  [x: string]: any;

  loading = false;
  function_type: string;
  error: any;
  results: any;
  fmData: any;
  onShowSearchIcon = false;
  submitted = false;
  onShowResults = false;
  hideBtn = false;
  btnColor: any;
  btnText: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  submitting: boolean = false;
  showWarning: boolean = true;
  ticketsCode: any;
  lookupData: any;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private notificationAPI: NotificationService,
    private manageTicketAPI: ManageTicketsServiceService,
    
  ) {
    this.fmData = this.router.getCurrentNavigation().extras.queryParams.formData;
    this.function_type = this.fmData.function_type;
    this.code = this.fmData.ticketsCode;
   }
   
   

   ngOnInit() {
    this.getPage();
  }
  
  
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  formData = this.fb.group({
    id: [''],
    category: ['', Validators.required],
    priority: ['', Validators.required],
    title: ['', Validators.required],
    description: ['', Validators.required],
   
  });
  
  disabledFormControll() {
    this.formData.disable();
    this.showWarning = false;
  }
  get f() {
    return this.formData.controls;
  }
  getData() {
    console.log("the id is: {}", this.fmData.ticketsCode)
    this.loading = true;
    this.manageTicketAPI.getCode(this.fmData.ticketsCode).pipe(
      takeUntilDestroy(this.destroy$)
    ).subscribe({
      next: (res) => {
        if (res) {
          // Handle successful response
          this.loading = false;
          this.results = res.entity;
          // Patch the values to the form
          console.log("Thhis is the data before patching",this.results)
          this.formData.patchValue({
            id: this.results.id,
            category: this.results.category,
            priority: this.results.priority,
            title: this.results.title,
            description: this.results.description,
          });
        } else {
          // Handle error or unexpected response structure
          this.loading = false;
          this.notificationAPI.alertWarning("ASSIGNEE RECORDS NOT FOUND");
          this.router.navigate(['/system/assignee/maintenance'], { skipLocationChange: true });
        }
      },
      error: (err) => {
        // Handle error
        this.loading = false;
        this.notificationAPI.alertWarning("ASSIGNEE SERVER ERROR");
      },
      complete: () => {}
    });
  }

  getPage() {
   if (this.function_type == "INQUIRE") {
    this.onShowSearchIcon = false;
      this.getData();
      this.onShowResults = true;
      this.disabledFormControll();
    }
    else if (this.function_type == "MODIFY") {
      console.log("I clicked modify")
      this.getData();
      this.onShowResults = true;
      this.btnColor = 'primary';
      this.btnText = 'MODIFY';
      this.onShowSearchIcon = true;
    }
    else if (this.function_type == "VERIFY") {
      this.getData();
      this.disabledFormControll();
      this.onShowResults = true;
      this.btnColor = 'primary';
      this.btnText = 'VERIFY';
    }
    else if (this.function_type == "DELETE") {
      this.getData();
      this.disabledFormControll();
      this.onShowResults = true;
      this.btnColor = 'accent';
      this.btnText = 'DELETE';
    }
  }
  onSubmit() {
    this.loading = true;
    this.submitted = true;
    this.submitting = true;
    if (this.function_type == "MODIFY") {
      if (this.formData.valid) {
        this.manageTicketAPI.modify(this.formData.value).pipe(
          takeUntilDestroy(this.destroy$)
        ).subscribe(
          (res) => {
            // Handle response
            if (res) {
              this.loading = false;
              this.results = res;
              this.notificationAPI.alertSuccess(this.results.message);
              this.router.navigate(['/system/assignee/maintenance'], { skipLocationChange: true });
            } else {
              this.loading = false;
              this.submitting = false;
              this.results = res;
              this.getData();
              this.notificationAPI.alertWarning(this.results.message);
            }
          },
          (err) => {
            // Handle error
            this.loading = false;
            this.submitting = false;
            this.getData();
            this.notificationAPI.alertWarning("Server Error: !!");
          }
        );
      } else {
        this.loading = false;
        this.submitting = false;
        this.getData();
        this.notificationAPI.alertWarning("NO TICKET FOUND");
      }
    }
    // Other conditions for DELETE operation...
  }

  manageTicketLookup(): void {
    const dialogRef = this.dialog.open(ManageTicketLookupComponent, {
      width: "40%",
      autoFocus: false,
      maxHeight: '90vh'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.lookupData = result.data;
      this.id = this.lookupData.id;
      this.formData.controls.id.setValue(this.id);
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
      this.categoryCode = this.lookupData.categoryCode;
      this.formData.controls.category.setValue(this.categoryCode);
    });
  }
  priorityCodeLookup(): void {
    const dialogRef = this.dialog.open(PriorityLookupComponent, {
      width: "40%",
      autoFocus: false,
      maxHeight: '90vh'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.lookupData = result.data;
      this.priorityCode = this.lookupData.priorityCode;
      this.priorityDescription = this.lookupData.priorityDescription;
      this.formData.controls.priority.setValue(this.priorityCode);
    });
  }
}

function takeUntilDestroy<T>(destroy$: Subject<boolean>): (source: Observable<T>) => Observable<T> {
  return (source: Observable<T>) => source.pipe(
    takeUntil(destroy$)
  );
}

