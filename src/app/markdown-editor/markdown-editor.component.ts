import { Component, ViewChild, OnInit, ViewEncapsulation, ElementRef, AfterViewInit } from '@angular/core';

const SimpleMDE: any = require('simplemde');

@Component({
  selector: 'custom-markdown-editor',
  template: `
    <textarea #markdown matInput></textarea>
  `,
  styles: [
    '@import url("../../../node_modules/simplemde/dist/simplemde.min.css");',
  ],
  encapsulation: ViewEncapsulation.Native
})
export class MarkdownEditorComponent implements AfterViewInit {

  @ViewChild('markdown') markdownTextEditor: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    console.log('After View Init');
    console.log(this.markdownTextEditor);
    new SimpleMDE({ element: this.markdownTextEditor.nativeElement, showIcons: false, status: false  });
  }

  ngOnInit() {
    console.log('Initializing Markdown Compoennt');
  }

}
