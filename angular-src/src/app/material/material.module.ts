
import { NgModule } from '@angular/core';
import { MatMenuModule }from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {  MatListModule } from  '@angular/material/list';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
const MaterialComponents=[
  MatMenuModule,MatButtonModule,
  MatToolbarModule,
    MatSidenavModule,
    MatListModule,
      MatIconModule,
    CarouselModule, WavesModule,MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,MatInputModule,MatSelectModule,
    MatProgressBarModule
];



@NgModule({
  
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
