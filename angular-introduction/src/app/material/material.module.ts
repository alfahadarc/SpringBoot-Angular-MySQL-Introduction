import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
const MaterialComponents = [
  MatPaginatorModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
  ];

@NgModule({
    exports: [MaterialComponents],
    imports: [MaterialComponents],
  })
  export class MaterialModule {}