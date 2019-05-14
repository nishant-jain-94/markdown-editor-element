import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ViewEncapsulation, ElementRef } from '@angular/core';

const SimpleMDE: any = require('simplemde');

@Component({
  selector: 'quizetency-markdown-editor',
  template: `
  <form>
    <mat-form-field>
      <textarea #markdown matInput name="text" placeholder="Question" cdkTextareaAutosize cdkAutosizeMinRows="2"></textarea>
    </mat-form-field>
  </form>
  `,
  styleUrls: [
    "../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
    "../../../node_modules/simplemde/dist/simplemde.min.css",
    "./markdown-editor.component.css",
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MarkdownEditorComponent implements AfterViewInit {

  @Input() model: string;
  @Output() modelChange = new EventEmitter<string>();
  @ViewChild('markdown') markdownTextEditor: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    const mde = new SimpleMDE({
      autofocus: false,
      element: this.markdownTextEditor.nativeElement,
      showIcons: false,
      status: false,
      forceSync: true,
      toolbar: false,
    });

    mde.codemirror.on('focus', () => {
      const editorElement = (this.markdownTextEditor.nativeElement as HTMLElement);
      const matFormFieldElement = editorElement.closest('mat-form-field');
      matFormFieldElement.classList.add('mat-focused');
      matFormFieldElement.classList.add('mat-form-field-should-float');
    });

    mde.codemirror.on('blur', () => {
      const editorElement = (this.markdownTextEditor.nativeElement as HTMLElement);
      const matFormFieldElement = editorElement.closest('mat-form-field');
      matFormFieldElement.classList.remove('mat-focused');
      matFormFieldElement.classList.remove('mat-form-field-should-float');
    });

    mde.codemirror.on('change', () => {
      const value = mde.codemirror.getValue();
      this.modelChange.emit(value);
    });

    if (this.model) {
      mde.codemirror.setValue(this.model);
    }
  }

  ngOnInit() {}
}
