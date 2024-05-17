import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { NotificationService } from "src/@core/helpers/NotificationService/notification.service";
import { PriorityService } from "./priority.service";

@Component({
  selector: 'app-priority-config',
  templateUrl: './priority-config.component.html',
  styleUrls: ['./priority-config.component.scss']
})
export class PriorityConfigComponent implements OnInit, OnDestroy {
  loading = false;
  function_type: string;
  priorityCode: any;
  error: any;
  results: any;
  fmData: any;
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
    private priorityAPI: PriorityService,
    private notificationAPI: NotificationService
  ) {
    this.fmData = this.router.getCurrentNavigation().extras.queryParams.formData;
    this.function_type = this.fmData.function_type;
    this.priorityCode = this.fmData.priorityCode;
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
    priorityCode: ['', Validators.required],
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
    this.loading = true;
    this.priorityAPI.getCode(this.fmData.priorityCode).pipe(takeUntil(this.destroy$)).subscribe(
      {
        next: (res) => {
          if (res.statusCode === 200) {
            this.loading = false;
            this.results = res.entity;
            this.formData = this.fb.group({
              id: [this.results.id],
              priorityCode: [this.priorityCode],
              title: [this.results.title],
              description: [this.results.description],
            });
          } else {
            this.loading = false;
            this.notificationAPI.alertWarning("PRIORITY RECORDS NOT FOUND");
            this.router.navigate([`/system/priority/maintenance`], { skipLocationChange: true });
          }
        },
        error: (err) => {
          this.loading = false;
          this.notificationAPI.alertWarning("PRIORITY SERVER ERROR");
        },
        complete: () => {

        }
      }
    )
  }

  getPage() {
    if (this.function_type == "ADD") {
      this.formData = this.fb.group({
        id: [''],
        priorityCode: [this.priorityCode],
        title: ['', Validators.required],
        description: ['', Validators.required],
      });
      this.btnColor = 'primary';
      this.btnText = 'SUBMIT';
    }
    else if (this.function_type == "INQUIRE") {
      this.getData();
      this.onShowResults = true;
      this.disabledFormControll();
    }
    else if (this.function_type == "MODIFY") {
      this.getData();
      this.onShowResults = true;
      this.btnColor = 'primary';
      this.btnText = 'MODIFY';
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
    if (this.function_type == "ADD") {
      if (this.formData.valid) {
        this.priorityAPI.create(this.formData.value).pipe(takeUntil(this.destroy$)).subscribe(
          (data) => {
            if (data.statusCode === 201) {
              this.loading = false;
              this.notificationAPI.alertSuccess(data.message);
              this.router.navigate([`/system/priority/maintenance`], { skipLocationChange: true });
            } else {
              this.loading = false;
              this.submitting = false;
              this.notificationAPI.alertWarning(data.message);
            }
          }, (err) => {
            this.loading = false;
            this.submitting = false;
            this.notificationAPI.alertWarning("Server Error: !!");
          }
        );
      } else {
        this.loading = false;
        this.submitting = false;
        console.log(this.formData.errors);
        this.notificationAPI.alertWarning("PRIORITY DATA IS INVALID");
      }
    }
    else if (this.function_type == "MODIFY") {
      if (this.formData.valid) {
        this.priorityAPI.modify(this.formData.value).pipe(takeUntil(this.destroy$)).subscribe(res => {
          if (res.statusCode == 200) {
            this.loading = false;
            this.results = res;
            this.notificationAPI.alertSuccess(this.results.message);
            this.router.navigate([`/system/priority/maintenance`], { skipLocationChange: true });
          } else {
            this.loading = false;
            this.submitting = false;
            this.results = res;
            this.getData();
            this.notificationAPI.alertWarning(this.results.message);
          }
        }, err => {
          this.loading = false;
          this.submitting = false;
          this.getData();
          this.notificationAPI.alertWarning("Server Error: !!");
        })
      } else {
        this.loading = false;
        this.submitting = false;
        this.getData();
        this.notificationAPI.alertWarning("PRIORITY FORM DATA IS INVALID");
      }
    }
    else if (this.function_type == "VERIFY") {
      this.priorityAPI.verify(this.results.id).pipe(takeUntil(this.destroy$)).subscribe(res => {
        if (res.statusCode == 200) {
          this.results = res;
          this.loading = false;
          this.notificationAPI.alertSuccess(this.results.message);
          this.router.navigate([`/system/priority/maintenance`], { skipLocationChange: true });

        } else {
          this.results = res;
          this.loading = false;
          this.submitting = false;
          this.getData();
          console.log("res", res);
          this.notificationAPI.alertWarning(this.results.message);
        }
      }, err => {
        this.loading = false;
        this.submitting = false;
        this.getData();
        this.notificationAPI.alertWarning("Server Error: !!");
      })
    }
    else if (this.function_type == "DELETE") {
      this.priorityAPI.delete(this.results.id).pipe(takeUntil(this.destroy$)).subscribe(res => {
        if (res.statusCode == 200) {
          this.results = res;
          this.loading = false;
          this.notificationAPI.alertSuccess(this.results.message);
          this.router.navigate([`/system/priority/maintenance`], { skipLocationChange: true });
        } else {
          this.results = res;
          this.loading = false;
          this.submitting = false;
          this.getData();
          this.notificationAPI.alertWarning(this.results.message);
        }
      }, err => {
        this.loading = false;
        this.submitting = false;
        this.getData();
        this.notificationAPI.alertWarning("Server Error: !!");
      })
    }
  }
}
