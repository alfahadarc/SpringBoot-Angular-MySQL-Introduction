import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
const MaterialComponents = [
    MatButtonModule,
    MatTableModule
  ];

@NgModule({
    exports: [MaterialComponents],
    imports: [MaterialComponents],
  })
  export class MaterialModule {}