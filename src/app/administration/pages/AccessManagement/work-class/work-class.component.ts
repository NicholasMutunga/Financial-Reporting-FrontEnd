import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/@core/helpers/NotificationService/notification.service';
import { RolesService } from '../roles-management/roles.service';
import { WorkClassService } from './work-class.service';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-work-class',
  templateUrl: './work-class.component.html',
  styleUrls: ['./work-class.component.scss'],
})
export class WorkClassComponent implements OnInit {
  loading = false;
  function_type: any;
  branchCode: any;
  error: any;
  results: any;
  fetchData: any;
  fmData: any;
  isDisabled: boolean = false;
  postedBy: any;
  verifiedFlag: any;
  verifiedBy: any;
  lookUpData: any;
  disableCheckBoxes = false;
  submitted = false;
  rolesData: any[] = [];
  btnColor: any;
  btnText: any;
  hideBtn = false;
  onShowResults = false;
  showWorkClass = false;
  classdata: any;
  priviledgedata: any;
  privilegesAddOns = [
    { id: '', name: 'DASHBOARD', selected: true, code: 1 },
    { id: '', name: 'CONFIGURATIONS', selected: true, code: 2 },
    { id: '', name: 'ASSIGN TICKETS', selected: true, code: 3 },
    { id: '', name: 'MY TICKETS', selected: true, code: 4 },
    { id: '', name: 'MANAGE TICKETS', selected: true, code: 5 },
    { id: '', name: 'ALL TICKETS', selected: true, code: 6 },
    { id: '', name: 'USER GUIDE', selected: true, code: 7 },
    { id: '', name: 'SURVEYS', selected: true, code: 8 },
    { id: '', name: 'REPORTS', selected: true, code: 9 },
    { id: '', name: 'ACCESS MANAGEMENT', selected: true, code: 10 },
    // { id: '', name: 'APPROVAL MANAGEMENT', selected: false, code: 11 },
  ];
  priviledges: FormArray<any>;
  displayArray: { id: string, name: string; selected: boolean; code: number; }[];
  id: any;
  roleId: any;
  postedTime: any;
  roleName: any;

  constructor(
    private router: Router,
    public fb: FormBuilder,
    private rolesService: RolesService,
    private workClassAPI: WorkClassService,
    private notificationAPI: NotificationService,
    private workActionAPI: WorkClassService
  ) {
    this.fmData = this.router.getCurrentNavigation().extras.queryParams.formData;
    this.function_type = this.fmData.function_type;
    this.id = this.fmData.id;
  }
  ngOnInit() {
    this.getPage();
    this.getAllRoles();
  }
  getAllRoles() {
    this.loading = true;
    this.rolesService.find().subscribe((res) => {
      this.loading = false;
      this.rolesData = res.entity
      console.log("roles", this.rolesData)
    },
      err => {
        this.loading = false;
        this.notificationAPI.alertWarning(err);
      });
  }
  onChanges(event: any) {
    // Assuming rolesData contains the roles with their privileges
    const selectedRole = this.rolesData.find(role => role.id === event.target.value);
  
    if (selectedRole && selectedRole.id === 'ROLE_SUPERUSER') {
      // Set all privileges to selected
      this.displayArray.forEach(privilege => {
        privilege.selected = true;
      });
    } else {
      // Reset all privileges to not selected
      this.displayArray.forEach(privilege => {
        privilege.selected = false;
      });
    }
  }
  
  formData = this.fb.group({
    id: [''],
    roleId: ['', Validators.required],
    workClass: ['', Validators.required],
    privileges: new FormArray([])
  })
  get f() {
    return this.formData.controls;
  }
  onInitForm() {
    this.formData = this.fb.group({
      id: [''],
      roleId: [''],
      workClass: [''],
      privileges: new FormArray([])
    })
  }
  createEmptyPriviledgeForm(): FormGroup {
    return this.fb.group({
      code: [''],
      id: [''],
      name: [''],
      selected: [''],
    });
  }
  addPriviledges(): void {
    this.priviledges = this.formData.get('privileges') as FormArray;
    this.priviledges.push(this.createEmptyPriviledgeForm());
  }
  updateEmptyPriviledgeForm(data: any): FormGroup {
    return this.fb.group({
      code: [data.code],
      id: [data.id],
      name: [data.name],
      selected: [data.selected],
    });
  }
  updatePriviledges(data: any): void {
    this.priviledges = this.formData.get('privileges') as FormArray;
    this.priviledges.push(this.updateEmptyPriviledgeForm(data));
  }
  onChange(e: any, i: any) {
    this.displayArray[i].selected = e.checked
  }
  disabledFormControl() {
    this.formData.disable();
    this.isDisabled = true;
  }
  getData() {
    this.loading = true;
    this.workClassAPI.findById(this.fmData.id).subscribe(
      (res) => {
        this.loading = false;
        this.results = res.entity;
        this.roleId = this.results.roleId;
        this.postedBy = this.results.postedBy;
        this.postedTime = this.results.postedTime;
        this.verifiedFlag = this.results.verifiedFlag;
        this.verifiedBy = this.results.verifiedBy;
        this.formData = this.fb.group({
          id: [this.results.id],
          roleId: [this.results.roleId],
          workClass: [this.results.workClass],
          privileges: new FormArray([])
        })
        this.displayArray = this.results.privileges;
        return this.displayArray;

      }
    )
  }
  getPage() {
    if (this.function_type == 'ADD') {
      this.displayArray = this.privilegesAddOns
      this.privilegesAddOns = this.privilegesAddOns;
      this.onInitForm();
      this.btnColor = 'primary';
      this.btnText = 'SUBMIT';
    } else if (this.function_type == 'INQUIRE') {
      this.isDisabled = true;
      this.hideBtn = true;
      this.onShowResults = true;
      this.getData();
      this.disabledFormControl();
    } else if (this.function_type == 'MODIFY') {
      this.onInitForm();
      this.btnColor = 'primary';
      this.btnText = 'MODIFY';
      this.getData();
      this.onShowResults = true;
    } else if (this.function_type == 'DELETE') {
      this.isDisabled = true;
      this.btnColor = 'warn';
      this.btnText = 'DELETE';
      this.getData();
      this.disabledFormControl();
      this.onShowResults = true;
    }
  }

  onSubmit() {
    this.submitted = true;
    for (let i = 0; i < this.displayArray.length; i++) {
      this.updatePriviledges(this.displayArray[i]);
    }
    if (this.formData.valid) {
      this.loading = true;
      if (this.function_type == 'ADD') {
        this.workClassAPI.create(this.formData.value).subscribe(res => {
          if (res.statusCode == 200 || res.statusCode === 201) {
            this.loading = false;
            this.notificationAPI.alertSuccess(res.message);
            this.router.navigate([`/system/workclass/maintenance`], { skipLocationChange: true, });
          } else {
            this.loading = false;
            this.notificationAPI.alertWarning(res.message);
          }
        }, err => {
          this.loading = false;
          this.notificationAPI.alertWarning(err);
        })
      }
    } else if (this.formData.invalid) {
      this.loading = false;
      this.notificationAPI.alertWarning("WORK CLASS FORM DATA INVALID");
    }

    if (this.function_type == 'MODIFY') {
      this.loading = true;
      this.workClassAPI.modify(this.formData.value).subscribe(
        res => {
          if (res.statusCode === 200) {
            this.loading = false;
            this.notificationAPI.alertSuccess(res.message);
            this.router.navigate([`/system/workclass/maintenance`], { skipLocationChange: true, });
          } else {
            this.loading = false;
            this.notificationAPI.alertWarning(res.message);
          }
        }, err => {
          this.loading = false;
          this.notificationAPI.alertWarning(err);
        })
    }
    if (this.function_type == 'VERIFY') {
      this.loading = true;
      this.workActionAPI.verify(this.fmData.id).subscribe(res => {
        if (res.statusCode == 200) {
          this.loading = false;
          this.notificationAPI.alertSuccess(res.message);
          this.router.navigate([`/system/workclass/maintenance`], { skipLocationChange: true, });
        } else {
          this.loading = false;
          this.notificationAPI.alertWarning(res.message);
        }
      }, err => {
        this.loading = false;
        this.notificationAPI.alertWarning(err.message);
      })
    }
    if (this.function_type == 'DELETE') {
      this.loading = true;
      this.workClassAPI.delete(this.fmData.id).subscribe(res => {
        if (res.statusCode == 200) {
          this.loading = false;
          this.notificationAPI.alertSuccess(res.message);
          this.router.navigate([`/system/workclass/maintenance`], { skipLocationChange: true, });
        } else {
          this.notificationAPI.alertWarning(res.message);
        }
      }, err => {
        this.loading = false;
        this.notificationAPI.alertWarning(err.message);
      })
    }
  }
}
