import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss'],
})
export class BranchesComponent implements OnInit {
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  branchCtrl = new FormControl();
  filteredBranches: Observable<string[]>;
  branches: string[] = [];
  allBranches: string[] = ['Branch1', 'Branch2', 'Branch3', 'Branch4', 'Branch5'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredBranches = this.branchCtrl.valueChanges.pipe(
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : this.allBranches.slice()
      )
    );
  }

  ngOnInit(): void {}

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.branches.push(value);
    }

    this.branchCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.branches.indexOf(fruit);

    if (index >= 0) {
      this.branches.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.branches.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.branchCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allBranches.filter((fruit) =>
      fruit.toLowerCase().includes(filterValue)
    );
  }

  onChange(event: any): void {
    const isChecked = event.currentTarget.checked as boolean;
    this.branches = isChecked ? this.allBranches : this.branches;

  }
}
