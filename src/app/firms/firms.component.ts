import {Component, OnInit} from '@angular/core';
import {DefaultFirm, Firm} from "./firm";

@Component({
  selector: 'app-firms',
  templateUrl: './firms.component.html',
  styleUrls: ['./firms.component.css']
})
export class FirmsComponent implements OnInit {

  filterText: string;

  firms: Firm[];
  title: string;

  constructor() {
    this.firms = [];
    this.firms.push(new DefaultFirm("1", "firm 1",new Date()));
    this.firms.push(new DefaultFirm("2", "firm 2",new Date('2011-04-11T10:20:30Z') ));
    this.title = "Overview firms"
  }

  resetFilter(): void {
    this.filterText = "";
  }

  ngOnInit() {

  }
}
