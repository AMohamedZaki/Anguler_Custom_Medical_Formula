import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { Tag } from '../model/tag';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent implements OnInit {
  @Input() formulaList: Tag[] = [];
  @Output() formulaListChange = new EventEmitter<Tag[]>();

  @Output() OnFormulaSaved = new EventEmitter();
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  EditFormula(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: { tags: this.formulaList },
    });

    dialogRef.afterClosed().subscribe((result: Tag[]) => {
      if (result) {
        this.updateValue(result);
        this.OnFormulaSaved.emit(result);
      }
    });
  }

  updateValue(value: Tag[]): void {
    this.formulaList = value;
    this.formulaListChange.emit(value);
  }
}
