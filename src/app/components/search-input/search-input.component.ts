import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Observable, startWith, map } from 'rxjs'

@Component({
  selector: 'weblancer-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent  {

  @Input() fullWidth = true
  @Input() placeholder = 'Search...'

  control = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>

  constructor () {
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    )
  }

  private _filter (value: string): string[] {
    const filterValue = value.toLowerCase()
    return this.options.filter(option => option.toLowerCase().includes(filterValue))
  }

}
