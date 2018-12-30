import { Injectable } from '@angular/core';

declare let toastr;

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  successMessage(message: string, title?: string) {
    toastr.success(message, title);
  }
  infoMessage(message: string, title?: string) {
    toastr.info(message, title);
  }
  warningMessage(message: string, title?: string) {
    toastr.warning(message, title);
  }
  errorMessage(message: string, title?: string) {
    toastr.error(message, title);
  }
  constructor() { }
}
