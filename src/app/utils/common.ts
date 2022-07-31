import { IconsService } from '../services/custom-icons.service'

export function initializeIcons (iconsService: IconsService): () => void {
  return () => iconsService.addCustomSvgIcons()
}
