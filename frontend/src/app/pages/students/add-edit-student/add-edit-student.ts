import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Student } from '../student-models';

@Component({
  selector: 'app-add-edit-student',
  imports: [FormsModule, ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './add-edit-student.html',
  styleUrl: './add-edit-student.scss'
})
export class AddEditStudent {
  fb = inject(FormBuilder)
  ref = inject(DynamicDialogRef)
  studentForm: FormGroup;
  isEdit: boolean = false;
  student: Student | null = null;

  constructor(private dialogRef: DynamicDialogRef, private dialogConfig: DynamicDialogConfig) {
    this.isEdit = this.dialogConfig.data?.isEdit || false;
    this.student = this.dialogConfig.data?.student || null;
    console.log(this.isEdit, this.student);

    this.studentForm = this.fb.group({
      name: new FormControl<string | null>(null, [Validators.required]),
      surname: new FormControl<string | null>(null, [Validators.required]),
      email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
      phone: new FormControl<string | null>(null, [Validators.required]),
      country: new FormControl<string | null>(null, [Validators.required]),
      city: new FormControl<string | null>(null, [Validators.required]),
      nationality: new FormControl<string | null>(null, [Validators.required])
    });
  }

  addStudent() {
    if (this.studentForm.valid) {
      const studentData = this.studentForm.value;

      console.log('Student Data:', studentData);
      this.ref.close(studentData);
    }
  }

  resetForm() {
    this.studentForm.reset();
  }

  closeDialog() {
    this.resetForm();
    this.ref.close();
  }

  // Helper methods to check if fields are invalid and touched
  // isFieldInvalid(fieldName: string): boolean {
  //   const control = this.studentAddForm.get(fieldName);
  //   return control ? control.invalid && (control.dirty || control.touched) : false;
  // }

  // getFieldError(fieldName: string): string {
  //   const control = this.studentAddForm.get(fieldName);
  //   if (!control) return '';

  //   if (control.hasError('required')) {
  //     return 'This field is required';
  //   }
  //   if (control.hasError('email')) {
  //     return 'Please enter a valid email address';
  //   }
  //   return '';
  // }
}
