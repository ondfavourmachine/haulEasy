import {ValidationErrors, AbstractControl} from '@angular/forms';
import {Injectable} from '@angular/core';
@Injectable()
export class EmailValidators {
  debouncer: any;

  constructor() {
  }

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return {cannotContainSpace: true};
    } else {
      return null;
    }
  }
}
