import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormGroup, FormBuilder } from '@angular/forms';
import * as XLSX from 'xlsx';
// import { DataInputService } from '../../data/data-input.service';

@Component({
  selector: 'app-data-input-management',
  templateUrl: './data-input-management.component.html',
  styleUrls: ['./data-input-management.component.scss']
})
export class DataInputManagementComponent implements OnInit {
submitBatch() {
throw new Error('Method not implemented.');
}
cancel() {
throw new Error('Method not implemented.');
}
  form: FormGroup;
  id: any;
  files: any;
  error: string;

  constructor(
    // private dataInputService: DataInputService, 
    private fb: FormBuilder) {
    this.form = this.fb.group({
      items: this.fb.array([]),
    });
  }
  format: string;

  ngOnInit(): void {
    this.hideSubmit = true;
    // this.format = 'excel';
    // throw new Error('Method not implemented.');
  }
  pageFunction = "Add";
  hideSubmit = false;
  posting: any;




  @ViewChild("fileInput") fileInput: any;
  items: any[] = []; // Array to store
  itemsForm: FormGroup;
  itemErrors: { [key: string]: string }[] = [];

  handleFileInput(files: FileList) {
    console.log('tyt')
    const file = files.item(0);

    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = (e: any) => {
        const arrayBuffer = e.target.result;
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });

        console.log("Parsed JSON data:", jsonData);
        this.items = jsonData;
        // console.log("Excel data :", this.items);

        this.itemsForm = this.fb.group({
          items: this.fb.array([]), // Array of items
        });

        this.validateItems();
      };

      fileReader.readAsArrayBuffer(file);
    }
  }

  

  validateItems() {
    this.itemErrors = [];
    const items = this.items;

    const itemsFormArray = this.itemsForm.get("items") as FormArray;
    for (const item of items) {
      const formGroup = this.fb.group({
        categoryName: [item.categoryName, []],
        remarks: [item.remarks, []],
      });

      itemsFormArray.push(formGroup);
      this.collectErrors(formGroup);

      if (formGroup.valid) {
      }
    }
  }

  collectErrors(control: AbstractControl, path: string = "") {
    if (control instanceof FormGroup) {
      Object.keys(control.controls).forEach((key) => {
        const subControl = control.get(key);
        const subPath = this.getErrorPath(path, key);
        this.collectErrors(subControl, subPath);
      });
    } else {
      const errors = control.errors;
      if (errors) {
        const itemError = {
          field: path,
          message: this.getErrorMessage(errors),
        };
        this.itemErrors.push(itemError);
      }
    }
  }

  getErrorPath(path: string, key: string): string {
    return path ? `${path}.${key}` : key;
  }

  getErrorMessage(errors: any): string {
    if (errors.required) {
      return "This field is required.";
    } else if (errors.pattern) {
      return "Invalid value.";
    }
    return "";
  }

  hasErrors(): boolean {
    return this.itemErrors && this.itemErrors.length > 0;
  }
}
  // submitBatch() {
  // }

  //   if (this.form.valid) {
  //     this.dataInputService.submitTrialBalance(this.form.value).subscribe(
  //       response => {
  //         console.log('Form submitted successfully:', response);
  //         // Handle success, e.g., show a success message
  //       },
  //       error => {
  //         console.error('Error submitting form:', error);
  //         // Handle error, e.g., show an error message
  //       }
  //     );
  //   } else {
  //     console.log('Form is not valid');
  //   }
  // }

  // cancel() {
  //   this.form.reset();
  //   console.log('Form cancelled');
  // }
// downloadTrialBalance() {
//   switch(this.format) {
//     case 'excel':
//         // Replace 'excel_file.xlsx' with the actual URL or file path of your Excel file
//         window.location.href = 'excel_file.xlsx';
//         break;
//     case 'word':
//         // Replace 'word_file.docx' with the actual URL or file path of your Word file
//         window.location.href = 'word_file.docx';
//         break;
//     case 'pdf':
//         // Replace 'pdf_file.pdf' with the actual URL or file path of your PDF file
//         window.location.href = 'pdf_file.pdf';
//         break;
//     default:
//         // Default case
//         break;
// }
// }

// }
  