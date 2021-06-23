import { Colors } from '../model/colors';

export class htmlTags {
  static closeSpan = `</span>`;

  static openBlockquote = `<blockquote>`;
  static closeBlockquote = `</blockquote>`;

  static openParagraph = `<p>`;
  static closeParagraph = `</p>`;

  static openSpanTag(color = '') {
    const style = color ? `style='color: ${color}; font-size: larger;' ` : '';
    return `<span ${style}>`;
  }
}
