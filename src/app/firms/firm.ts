/**
 * Created by 7918 on 19/01/2017.
 */
export interface Firm {
  firmNumber: string;
  firmName: string;
  startDate: Date;

}
export class DefaultFirm implements Firm{
  firmNumber: string;
  firmName: string;
  startDate: Date;


  constructor(firmNumber: string, firmName: string, startDate: Date) {
    this.firmNumber = firmNumber;
    this.firmName = firmName;
    this.startDate = startDate;
  }
}
