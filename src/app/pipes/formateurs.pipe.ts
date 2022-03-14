import { Pipe, PipeTransform } from '@angular/core';

import {Formateur} from "../models/formateur";

@Pipe({
  name: 'formateurs'
})
export class FormateursPipe implements PipeTransform {

  transform(value: Formateur[], Search: string): any {
    if (Search === '' || Search === null || Search === undefined) {
      return value;
    }
    return  value.filter(p => /**(p.name.toLowerCase().includes(Search))||**/(p.lastname.toLowerCase().includes(Search)));
  }

}
