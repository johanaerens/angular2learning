import {Pipe, PipeTransform} from '@angular/core';
import {Firm} from "./firm";

@Pipe({
  name: 'firmsPipe'
})
export class FirmsPipePipe implements PipeTransform {

  transform(firms: Firm[], filterBy: string): any {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    if (filterBy) {
      return firms.filter(firm => firm.firmName.toLocaleLowerCase().startsWith(filterBy))
    } else {
      return firms;
    }
  }
}
