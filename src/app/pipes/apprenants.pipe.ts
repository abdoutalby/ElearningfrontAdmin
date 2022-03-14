import { Pipe, PipeTransform } from '@angular/core';
import {Apprenant} from "../models/apprenant";

@Pipe({
  name: 'apprenants'
})
export class ApprenantsPipe implements PipeTransform {

  transform(value: Apprenant[], Search: string): any {
    if (Search === '' || Search === null || Search === undefined) {
      return value;
    }
    return  value.filter(p => /**(p.name.toLowerCase().includes(Search))||**/(p.lastname.toLowerCase().includes(Search)));
  }

}
