import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuOption, MenuOptionsLookUp } from '../student-models';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { NgClass } from '@angular/common';
import { Popover, PopoverModule } from 'primeng/popover';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-student-details',
  imports: [FormsModule, ButtonModule, MenubarModule, NgClass, SelectButtonModule, PopoverModule, RouterOutlet, DialogModule],
  templateUrl: './student-details.html',
  styleUrl: './student-details.scss'
})

export class StudentDetails implements OnInit {
  @ViewChild('op') op!: Popover;

  router = inject(Router)
  id = inject(ActivatedRoute).snapshot.params['id'];
  dialogVisible: boolean = false;
  operation: 'del' | 'ban' | null = null

  menuOptions = MenuOptionsLookUp;
  chosenMenuOption = MenuOption.Info


  ngOnInit(): void {
    // this.router.navigate(['student-details', this.id, 'info']);
  }

  toggle(event: any) {
    this.op.toggle(event);
  }

  redirectTo(option: any) {
    this.op.hide();

    if (option.label === 'Operations') {
      this.dialogVisible = true;
      return
    }

    this.chosenMenuOption = option.value;
    this.router.navigate(['students', this.id, option.route]);
  }

  chooseOperation(opt: 'del' | 'ban') {
    this.operation = opt
  }

  handleOperation() {
    this.dialogVisible = false;
    // api req here
    setTimeout(() => {
      this.operation = null
    }, 1000);
  }

  getLabel() {
    return this.menuOptions.find(option => option.value === this.chosenMenuOption)?.label;
  }

  getIcon() {
    return this.menuOptions.find(option => option.value === this.chosenMenuOption)?.icon;
  }
}
