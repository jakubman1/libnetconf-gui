import { Component, OnInit } from '@angular/core';

// https://medium.com/@mariemchabeni/angular-7-drag-and-drop-simple-file-uploadin-in-less-than-5-minutes-d57eb010c0dc
// https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/

@Component({
  selector: 'nc-base',
  template: `
    <input type="file"
           id="file"
           (change)="handleFileInput($event.target.files)">
  `,
})
export class UploadSchemaButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    return null;
  }

}
