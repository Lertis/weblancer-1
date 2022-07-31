import { APP_INITIALIZER, NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
  MainComponent,
  FooterComponent,
  CompanyItemComponent,
  ButtonComponent,
  SearchInputComponent,
  PaginatorComponent
} from './components'

import { IconsService } from './services/custom-icons.service'

import { initializeIcons } from './utils/common'

const COMPONENTS = [
  MainComponent,
  FooterComponent,
  CompanyItemComponent,
  ButtonComponent,
  SearchInputComponent,
  PaginatorComponent
]

const ANGULAR_MODULES = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
]

const MATERIAL = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatIconModule
]

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS
  ],
  imports: [
    AppRoutingModule,
    ...ANGULAR_MODULES,
    ...MATERIAL
  ],
  providers: [
    IconsService,
    MatIconRegistry,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeIcons,
      deps: [IconsService, MatIconRegistry, DomSanitizer],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
