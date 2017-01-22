import { Injectable } from '@angular/core';

function _window() : any {
   // return the global native browser window object
   return window.location.protocol + "//" + window.location.host;
}

@Injectable()
export class WindowRef {
   get domain() : any {
      return _window();
   }

}
