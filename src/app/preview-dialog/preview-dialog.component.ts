import { Clipboard } from '@angular/cdk/clipboard';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Tag } from '../model/tag';
import { BracketService } from '../service/bracket.service';
import { TagTypeService } from '../service/tag-type.service';

@Component({
  selector: 'app-preview-dialog',
  templateUrl: './preview-dialog.component.html',
  styleUrls: ['./preview-dialog.component.scss'],
})
export class PreviewDialogComponent implements OnInit {
  paragraphText: string;
  paragraphHTML: SafeHtml;

  constructor(
    public dialogRef: MatDialogRef<PreviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { tags: Tag[] },
    private sanitizer: DomSanitizer,
    private tagTypeService: TagTypeService,
    private bracketService: BracketService,
    private clipboard: Clipboard,
    private snackBar: MatSnackBar
  ) {
    this.paragraphText = '';
  }

  ngOnInit(): void {
    this.setTextArea(this.data.tags);
  }

  setTextArea(tags: Tag[]): void {
    if (tags && tags.length > 0) {
      this.paragraphText = '';
      tags.forEach((tag) => {
        this.handleText(tag);
      });

      this.paragraphHTML = this.sanitizer.bypassSecurityTrustHtml(
        this.paragraphText
      );
    }
  }

  onCopyClick(): void {
    const tags = this.data.tags;
    const textAreaText = tags.map((it) => it.FieldName).join(' ');
    this.clipboard.copy(textAreaText);
    this.snackBar.open('copied to clipboard', 'Close', { duration: 2000 });
  }

  private handleText(tag: Tag): void {
    const _type = this.tagTypeService.getType(tag.TypeId);
    this.paragraphText += this.bracketService.formatTag(tag, _type);
  }
}
