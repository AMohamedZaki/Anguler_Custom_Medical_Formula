import { Colors } from "../model/colors";

export class htmlTages {

    static closeSpan: string = `</span>`
    
    static openBlockquote: string = `<blockquote>`;
    static closeBlockquote: string = `</blockquote>`;
    
    static openParagraph: string = `<p>`;
    static closeParagraph: string = `</p>`;
    
    
    static openSpanTag(color:Colors = Colors.green) {
        return `<span style='color: ${color}; font-size: larger;'>`;
    }

}
