import { Colors } from '../model/colors';

export class htmlTages {
  static closeSpan = `</span>`;

  static openBlockquote = `<blockquote>`;
  static closeBlockquote = `</blockquote>`;

  static openParagraph = `<p>`;
  static closeParagraph = `</p>`;

  static openSpanTag(color: string) {
    const _color = color ? `color: ${color};` : '';
    return `<span style="${_color}font-size: larger;">`;
  }
}
