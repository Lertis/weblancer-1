import { Component } from '@angular/core'

@Component({
  selector: 'weblancer-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  items: { name: string; subname: string; booleanValue: boolean }[] = [
    { name: 'Alcatel', 'subname': 'Alcatel,com Inc', booleanValue: true },
    { name: 'Alcatel', 'subname': 'Alcatel,com Inc', booleanValue: true },
    { name: 'Alcatel', 'subname': 'Alcatel,com Inc', booleanValue: false },
    { name: 'Alcatel', 'subname': 'Alcatel,com Inc', booleanValue: true },
    { name: 'Alcatel', 'subname': 'Alcatel,com Inc', booleanValue: true },
    { name: 'Alcatel', 'subname': 'Alcatel,com Inc', booleanValue: true },
    { name: 'Alcatel', 'subname': 'Alcatel,com Inc', booleanValue: true },
  ]
}
