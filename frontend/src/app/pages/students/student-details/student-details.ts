import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuOption, MenuOptionsLookUp } from '../student-models';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { NgClass } from '@angular/common';
import { Popover, PopoverModule } from 'primeng/popover';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-student-details',
  imports: [FormsModule, ButtonModule, MenubarModule, NgClass, SelectButtonModule, PopoverModule, RouterOutlet],
  templateUrl: './student-details.html',
  styleUrl: './student-details.scss'
})

export class StudentDetails {
  @ViewChild('op') op!: Popover;

  router = inject(Router)
  id = inject(ActivatedRoute).snapshot.params['id'];

  menuOptions = MenuOptionsLookUp;
  chosenMenuOption = MenuOption.Info

  toggle(event: any) {
    this.op.toggle(event);
  }

  redirectTo(option: any) {
    this.chosenMenuOption = option.value;
    this.router.navigate(['student-details', this.id, option.route]);
    this.op.hide();
  }

  getLabel() {
    return this.menuOptions.find(option => option.value === this.chosenMenuOption)?.label;
  }
}
