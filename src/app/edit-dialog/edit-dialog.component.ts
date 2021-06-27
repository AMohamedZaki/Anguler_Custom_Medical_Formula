import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CloneObject } from '../helper/helper';
import { Tag } from '../model/tag';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  updatedData: Tag[] = [];

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { tags: Tag[] },
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.updatedData = CloneObject(this.data.tags);
  }

  SaveFormula(): void {
    this.snackBar.open('Data Saved Successfully', 'Close', { duration: 2000 });
    this.dialogRef.close(this.updatedData);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  drop(event: CdkDragDrop<Tag[]>): void {
    moveItemInArray(this.updatedData, event.previousIndex, event.currentIndex);
  }

  removeTag(index: number): void {
    this.updatedData.splice(index, 1);
  }
}
