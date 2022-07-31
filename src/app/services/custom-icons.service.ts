import { Injectable } from '@angular/core'

import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'

import { icons } from './custom-icons.set'

@Injectable()
export class IconsService {
  constructor (
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitzer: DomSanitizer
  ) {}

  addCustomSvgIcons (): void {
    icons.forEach((icon: string) => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitzer.bypassSecurityTrustResourceUrl(`./assets/icons/${icon}.svg`)
      )
    })
  }

}
