import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChromeMessageService {

  constructor() { }

  sendMessage(message: any): Promise<any> {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(message, (response) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(response);
        }
      });
    });
  }
}


import { Component } from '@angular/core';
import { ChromeMessageService } from '/Users/lanzeboo/Desktop/gplcmncpklkdjiccbknjjkoidpgkcakd/chrome-message.service.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NEUGradeSmart Extension';

  constructor(private chromeMessageService: ChromeMessageService) { }

  checkContent(content: string) {
    this.chromeMessageService.sendMessage({ action: 'checkContent', content }).then(response => {
      console.log('Response:', response);
      // Process the response as needed
    }).catch(error => {
      console.error('Error:', error);
    });
  }
}
