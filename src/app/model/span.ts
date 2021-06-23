import { htmlTags } from '../helper/htmlTages';
import { Colors } from './colors';

export class SpanConfig {
  color?: Colors;
  newLineBefore: boolean;
  newLineAfter: boolean;
  tabBefore: boolean;
  tabAfter: boolean;

  constructor() {
    this.color = null;
    this.newLineBefore = false;
    this.newLineAfter = false;
    this.tabBefore = false;
    this.tabAfter = false;
  }


//   getTag(spanConfig: SpanConfig) {



//     return `${newLineBr}${htmlTags.openSpanTag(
//         this.colors[color].toString()
//       )}${bracket}${htmlTags.closeSpan}${newLineBr}`;
//   }
}
