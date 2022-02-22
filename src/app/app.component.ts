import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filemanager';
  public hostUrl: string = 'http://http://103.81.249.69:3001/';
  public ajaxSettings: object = {
    url: this.hostUrl,
    downloadUrl: this.hostUrl + 'Download',
    uploadUrl: this.hostUrl + 'Upload',
    getImageUrl: this.hostUrl + 'GetImage'
  };
}
