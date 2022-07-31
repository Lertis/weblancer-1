import { Component, Input } from '@angular/core'

@Component({
  selector: 'weblancer-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() primary = true
  @Input() disabled = false
  @Input() transparent = false
  @Input() noBorder = false
}
