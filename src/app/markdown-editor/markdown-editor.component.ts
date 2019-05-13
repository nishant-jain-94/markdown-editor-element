import { Component, Input, Output, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-markdown-editor',
  template: `
    <p>
      markdown-editor works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class MarkdownEditorComponent implements OnInit {

  @Input() text: string;
  constructor() { }

  ngOnInit() {
    console.log(this.text);
    console.log('Initializing Markdown Compoennt');
  }

}
