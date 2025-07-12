import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { AddEditStudent } from './add-edit-student/add-edit-student';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-students',
  imports: [TableModule, CommonModule, RouterLink, ButtonModule, InputTextModule, IconFieldModule, InputIconModule, InputTextModule, RouterOutlet],
  providers: [DialogService],
  templateUrl: './students.html',
  styleUrl: './students.scss'
})
export class Students {
  students: any[] = [];
  dialogService = inject(DialogService)
  ref: DynamicDialogRef | undefined

  constructor() {
    this.students = [
      { id: '1', name: 'Emma', surname: 'Johnson', email: 'emma.johnson@email.com', phone: '+1-555-0123', address: '123 Oak Street', city: 'London', state: 'England', zip: 'SW1A 1AA', country: 'United Kingdom', nationality: 'British', status: 'Active' },
      { id: '2', name: 'Lucas', surname: 'Martinez', email: 'lucas.martinez@email.com', phone: '+34-555-0124', address: '456 Pine Avenue', city: 'Madrid', state: 'Madrid', zip: '28001', country: 'Spain', nationality: 'Spanish', status: 'Active' },
      { id: '3', name: 'Sophia', surname: 'Chen', email: 'sophia.chen@email.com', phone: '+86-555-0125', address: '789 Maple Drive', city: 'Beijing', state: 'Beijing', zip: '100000', country: 'China', nationality: 'Chinese', status: 'Active' },
      { id: '4', name: 'Ahmed', surname: 'Hassan', email: 'ahmed.hassan@email.com', phone: '+20-555-0126', address: '321 Elm Court', city: 'Cairo', state: 'Cairo', zip: '11511', country: 'Egypt', nationality: 'Egyptian', status: 'Active' },
      { id: '5', name: 'Isabella', surname: 'Rodriguez', email: 'isabella.rodriguez@email.com', phone: '+57-555-0127', address: '654 Birch Lane', city: 'Bogotá', state: 'Cundinamarca', zip: '110111', country: 'Colombia', nationality: 'Colombian', status: 'Active' },
      { id: '6', name: 'Yuki', surname: 'Tanaka', email: 'yuki.tanaka@email.com', phone: '+81-555-0128', address: '987 Cedar Road', city: 'Tokyo', state: 'Tokyo', zip: '100-0001', country: 'Japan', nationality: 'Japanese', status: 'Active' },
      { id: '7', name: 'Marcus', surname: 'Thompson', email: 'marcus.thompson@email.com', phone: '+1-555-0129', address: '147 Willow Way', city: 'Toronto', state: 'Ontario', zip: 'M5H 2N2', country: 'Canada', nationality: 'Canadian', status: 'Active' },
      { id: '8', name: 'Priya', surname: 'Patel', email: 'priya.patel@email.com', phone: '+91-555-0130', address: '258 Spruce Street', city: 'Mumbai', state: 'Maharashtra', zip: '400001', country: 'India', nationality: 'Indian', status: 'Active' },
      { id: '9', name: 'Carlos', surname: 'Silva', email: 'carlos.silva@email.com', phone: '+55-555-0131', address: '369 Ash Avenue', city: 'São Paulo', state: 'São Paulo', zip: '01000-000', country: 'Brazil', nationality: 'Brazilian', status: 'Active' },
      { id: '10', name: 'Aisha', surname: 'Al-Zahra', email: 'aisha.alzahra@email.com', phone: '+966-555-0132', address: '741 Poplar Drive', city: 'Riyadh', state: 'Riyadh', zip: '11461', country: 'Saudi Arabia', nationality: 'Saudi Arabian', status: 'Active' },
      { id: '11', name: 'David', surname: 'Kim', email: 'david.kim@email.com', phone: '+82-555-0133', address: '852 Chestnut Lane', city: 'Seoul', state: 'Seoul', zip: '03123', country: 'South Korea', nationality: 'Korean', status: 'Active' },
      { id: '12', name: 'Maria', surname: 'Garcia', email: 'maria.garcia@email.com', phone: '+34-555-0134', address: '963 Walnut Court', city: 'Barcelona', state: 'Catalonia', zip: '08001', country: 'Spain', nationality: 'Spanish', status: 'Active' },
      { id: '13', name: 'James', surname: 'Wilson', email: 'james.wilson@email.com', phone: '+61-555-0135', address: '159 Hickory Road', city: 'Sydney', state: 'New South Wales', zip: '2000', country: 'Australia', nationality: 'Australian', status: 'Active' },
      { id: '14', name: 'Fatima', surname: 'Rahman', email: 'fatima.rahman@email.com', phone: '+880-555-0136', address: '357 Sycamore Way', city: 'Dhaka', state: 'Dhaka', zip: '1000', country: 'Bangladesh', nationality: 'Bangladeshi', status: 'Active' },
      { id: '15', name: 'Alexander', surname: 'Popov', email: 'alexander.popov@email.com', phone: '+7-555-0137', address: '486 Magnolia Street', city: 'Moscow', state: 'Moscow', zip: '101000', country: 'Russia', nationality: 'Russian', status: 'Active' },
      { id: '16', name: 'Zara', surname: 'Khan', email: 'zara.khan@email.com', phone: '+92-555-0138', address: '753 Redwood Avenue', city: 'Karachi', state: 'Sindh', zip: '74000', country: 'Pakistan', nationality: 'Pakistani', status: 'Active' },
      { id: '17', name: 'Michael', surname: 'O\'Connor', email: 'michael.oconnor@email.com', phone: '+353-555-0139', address: '951 Cypress Lane', city: 'Dublin', state: 'Leinster', zip: 'D01', country: 'Ireland', nationality: 'Irish', status: 'Active' },
    ];
  }

  addStudent() {
    this.ref = this.dialogService.open(AddEditStudent, {
      width: '50vw',
      modal: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
      },
      data: {
        isEdit: false
      }
    });

    this.ref?.onClose.subscribe((student: any) => {
      if (student) {
        this.students.push(student);
      }
    })
  }
}
