import { Component, Input } from '@angular/core'

@Component({
  selector: 'weblancer-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss']
})
export class CompanyItemComponent {
  @Input() name = 'Alcatel'
  @Input() subname = 'Alcatel,com Inc'

  @Input() booleanValue = false
}
