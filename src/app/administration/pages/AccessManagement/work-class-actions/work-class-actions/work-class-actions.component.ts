import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationService } from 'src/@core/helpers/NotificationService/notification.service';
import { WorkClassService } from '../../work-class/work-class.service';
import { WorkClassActionServiceService } from '../work-class-action-service/work-class-action-service.service';

@Component({
  selector: 'app-work-class-actions',
  templateUrl: './work-class-actions.component.html',
  styleUrls: ['./work-class-actions.component.scss']
})
export class WorkClassActionsComponent implements OnInit {
  loading = false;
  function_type: string;
  branchCode: any;
  error: any;
  results: any;
  fetchData: any;
  fmData: any;
  isDisabled: boolean;
  postedBy: any;
  verifiedFlag: any;
  verifiedBy: any;
  formData: FormGroup;
  lookUpData: any;
  disableCheckBoxes = false;
  submitted = false;
  subscription!: Subscription;
  rolesData: any[] = [];
  btnColor: any;
  btnText: any;
  hideBtn = false;
  onShowResults = false;
  classdata: any;
  priviledgedata: any;
  basicActionsAddOns = [
    { id: '', name: 'ADD', selected: false, code: 2 },
    { id: '', name: 'DELETE', selected: false, code: 5 },
    { id: '', name: 'INQUIRE', selected: false, code: 9 },
    { id: '', name: 'VERIFY', selected: false, code: 13 },
    { id: '', name: 'MODIFY', selected: false, code: 14 },
   ]
  filtered: { name: string; selected: boolean; code: number; }[];
  basicActions: FormArray<any>;
  displayArray: { id: string; name: string; selected: boolean; code: number; }[];
  obj: any;

  constructor(
    private router: Router,
    public fb: FormBuilder,
    private workClassAPI: WorkClassService,
    private notificationAPI: NotificationService,
    private workActionAPI: WorkClassActionServiceService
  ) {
    this.fmData = this.router.getCurrentNavigation().extras.queryParams.formData;
    this.fetchData = this.router.getCurrentNavigation().extras.queryParams.fetchData;
    if (this.router.getCurrentNavigation().extras.queryParams == null) {
      this.router.navigate([`/system/`], { skipLocationChange: true });
    }
    this.function_type = this.fmData.function_type;
    if (this.fetchData.entity != null) {
      this.postedBy = this.fetchData.entity.postedBy;
      this.verifiedFlag = this.fetchData.entity.verifiedFlag;
      this.verifiedBy = this.fetchData.entity.verifiedBy;
    }
  }
  ngOnInit() {
    this.getPage();
    this.getWorkClass();
  }
  getWorkClass() {
    this.loading = true;
    this.workClassAPI.find().subscribe(
      (res) => {
        this.loading = false
        this.classdata = res.entity;
      },
      err => {
        this.loading = false;
        this.notificationAPI.alertWarning(err);
      })
    }
    onWorkClassChange(event: any) {
      this.loading = true;
      this.workClassAPI.getPriviledges(event.target.value).subscribe(
        (res) => {
          this.loading = false;
          this.priviledgedata = res.entity;
      },
      (err) => {
        this.loading = false;
        this.notificationAPI.alertWarning(err);
      }
    )
  }
  apiFormData = this.fb.group({
    id: [''],
    privilegeId: [''],
    workclassId: [''],
    basicactions: new FormArray([])
  })
  onInitForm() {
    this.apiFormData = this.fb.group({
      id: [''],
      privilegeId: [''],
      workclassId: [''],
      basicactions: new FormArray([])
    })
  }
  createEmptyBasicactions(): FormGroup {
    return this.fb.group({
      code: [''],
      id: [''],
      name: [''],
      selected: [''],
    });
  }
  addBasicaction(): void {
    this.basicActions = this.apiFormData.get('basicactions') as FormArray;
    this.basicActions.push(this.createEmptyBasicactions());
  }
  updateEmptyBasicactions(data: any): FormGroup {
    return this.fb.group({
      code: [data.code],
      id: [data.id],
      name: [data.name],
      selected: [data.selected],
    });
  }
  updateBasicaction(data: any): void {
    this.basicActions = this.apiFormData.get('basicactions') as FormArray;
    this.basicActions.push(this.updateEmptyBasicactions(data));
  }
  getData(privilegeId: string | number | boolean, workclassId: string | number | boolean) {
    this.loading = true;
    let params = new HttpParams()
      .set('privilegeId', privilegeId)
      .set('workclassId', workclassId);
    this.workActionAPI.get(params).subscribe(res => {
      this.loading = false;
      this.displayArray = res.entity;
      console.log("data", this.displayArray);
      return this.displayArray;
    }, err => {
      this.loading = false;
      this.notificationAPI.alertWarning(err);
    })
  }
  onChange(e: any, i: any) {
    this.displayArray[i].selected = e.checked
  }
  onSelecteWorkClass(e: any) {
    if (this.function_type == 'ADD') {
      this.displayArray = this.basicActionsAddOns
    }
    if (this.function_type != 'ADD') {
      this.getData(this.apiFormData.controls.privilegeId.value, this.apiFormData.controls.workclassId.value);
    }
  }
  disabledFormControl() {
    this.apiFormData.disable();
    this.isDisabled = true;
  }
  get f() {
    return this.formData.controls;
  }

  getPage() {
    if (this.function_type == 'ADD') {
      this.displayArray = this.basicActionsAddOns
      this.basicActionsAddOns = this.basicActionsAddOns;
      this.onInitForm();
      this.btnColor = 'primary';
      this.btnText = 'SUBMIT';
    } else if (this.function_type == 'INQUIRE') {
      this.isDisabled = true;
      this.hideBtn = true;
      this.onShowResults = true;
    } else if (this.function_type == 'MODIFY') {
      this.onInitForm();
      this.btnColor = 'primary';
      this.btnText = 'MODIFY';
    } else if (this.function_type == 'DELETE') {
      this.isDisabled = true;
      this.btnColor = 'warn';
      this.btnText = 'DELETE';
      this.onShowResults = true;
    }
  }

  onSubmit() {
    for (let i = 0; i < this.displayArray.length; i++) {
      this.updateBasicaction(this.displayArray[i])
    }

    if (this.function_type == 'ADD') {
      if (this.apiFormData.valid) {
        this.loading = true;
        this.workActionAPI.add(this.apiFormData.value).subscribe(res => {
          if (res.statusCode === 200 || res.statusCode === 201) {
            this.loading = false;
            this.notificationAPI.alertSuccess(res.message);
            this.router.navigate([`/system/workclassactions/maintenance`], {
              skipLocationChange: true
            });
          } else {
            this.loading = false;
            this.notificationAPI.alertWarning(res.message)
          }
        }, err => {
          this.loading = false;
          this.notificationAPI.alertWarning(err.message)
        })
      } else {
        this.loading = false;
        this.notificationAPI.alertWarning("Invalid Form")
      }
    }
    else if (this.function_type == 'MODIFY') {
      this.loading = true;
      this.workActionAPI.modify(this.apiFormData.value).subscribe(res => {
        if (res.statusCode === 200 || res.statusCode === 201) {
          this.loading = false;
          this.notificationAPI.alertSuccess(res.message);
          this.router.navigate([`/system/workclassactions/maintenance`], {
            skipLocationChange: true
          });
        } else {
          this.loading = false;
          this.notificationAPI.alertWarning(res.message)
        }
      }, err => {
        this.loading = false;
        this.notificationAPI.alertWarning(err.message)
      })
    }
    else if (this.function_type == 'VERIFY') {
      this.loading = true;
      let params = new HttpParams()
        .set('privilegeId', this.apiFormData.controls.workclassId.value)
        .set('workclassId', this.apiFormData.controls.privilegeId.value);
      this.workActionAPI.delete(params).subscribe(res => {
        if (res.statusCode == 200) {
          this.loading = false;
          this.notificationAPI.alertSuccess(res.message);
          this.router.navigate([`/system/workclassactions/maintenance`], {
            skipLocationChange: true
          });
        } else {
          this.loading = false;
          this.notificationAPI.alertWarning(res.message);
        }
      }, err => {
        this.loading = false;
        this.notificationAPI.alertWarning(err.message);
      })
    }
    else if (this.function_type == 'DELETE') {
      this.loading = true;
      let params = new HttpParams()
        .set('privilegeId', this.apiFormData.controls.workclassId.value)
        .set('workclassId', this.apiFormData.controls.privilegeId.value);
      this.workActionAPI.delete(params).subscribe(res => {
        this.loading = false;
        this.notificationAPI.alertSuccess(res);
        this.router.navigate([`/system/workclassactions/maintenance`], {
          skipLocationChange: true
        });
      }, err => {
        this.loading = false;
        this.notificationAPI.alertWarning(err.message);
      })
    }
  }

}
