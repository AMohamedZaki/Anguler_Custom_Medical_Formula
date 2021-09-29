import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { getTags } from 'src/app/helper/helper';
import { Tag } from 'src/app/model/tag';
import { TagTypeService } from 'src/app/service/tag-type.service';

@Component({
  selector: 'app-button-inputs',
  templateUrl: './button-inputs.component.html',
  styleUrls: ['./button-inputs.component.scss']
})
export class ButtonInputsComponent implements OnInit {

  tags: Tag[] = [];
  tagsByType: { id: [string]; tags: Tag[] } = {} as {
    id: [string];
    tags: Tag[];
  };
  keys: string[] = [];

  formulaList: Tag[] = [];
  undoList: Tag[] = [];
  redoList: Tag[] = [];
  
  @Output('onTagClick') onTagClick = new EventEmitter<Tag>();

  constructor(private tagTypeService: TagTypeService) { 
    this.tags = getTags();
  }

  ngOnInit(): void {
    this.getObjectProps();
  }

  private getObjectProps(): void {
    this.tagsByType = this.groupByTagType(this.tags);
    this.keys = Object.keys(this.tagsByType);
  }


  groupByTagType(tags: Tag[]): any {
    return tags.reduce((r, a) => {
      r[a.TypeId] = r[a.TypeId] || [];
      r[a.TypeId].push(a);
      return r;
    }, Object.create(null));
  }


  getTypeNameById(id: number): string {
    return this.tagTypeService.getTypeNameById(id);
  }



  AppendText(event: Tag): void {
    this.onTagClick.emit(event);
  }

}
