import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ShopService } from 'src/app/services/shop/shop.service';
import { EditshopComponent } from '../editshop/editshop.component';
import { AddshopComponent } from '../addshop/addshop.component';
import { BooksinshopComponent } from '../booksinshop/booksinshop.component';
import { BookShop } from 'src/app/models/bookshop';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteConfirmComponent } from '../../shared/delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-listshop',
  templateUrl: './listshop.component.html',
  styleUrls: ['./listshop.component.css']
})
export class ListshopComponent implements OnInit {

  private shop!: BookShop;
  displayedColumns: string[] = ['title', 'location', 'email', 'contactNo', 'books', 'actions'];
  dataSource!: MatTableDataSource<BookShop>;
  isLoading: boolean=true;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private shopService: ShopService, public dialog: MatDialog, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAllShops();
  }

  getAllShops() {
    this.shopService.findAll().subscribe({
      next: (v) => {
        this.dataSource = new MatTableDataSource(v)
        this.isLoading = false;
      },
      error: (e) => console.error(e),
      complete: () => {
        this.dataSource.paginator = this.paginator;
      }
    });
  }
  edit(row: BookShop) {
    const dialogRef = this.dialog.open(EditshopComponent, {
      data: row,
      panelClass: 'custom-modalbox',
      width:'50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllShops()
    });
  }
  remove(row: BookShop) {
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      data: {
        x:row,
        msg:"Do you really want to delete this shop?"
      },
      width:'50%',
      panelClass: 'custom-modalbox'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result==true){
        this.actualRemove(row);
      }
    });
  }
  actualRemove(row:BookShop){
    this.shopService.remove(row.id).subscribe({
      next: (v) => {
        console.log(v)
        this.toastrService.warning("Successfully Removed", "Removed")
        this.getAllShops()
      },
      error: (err) => {
        console.log(err)
        this.toastrService.error(err.error.error, "Error")
      },
    })
  }

  goAddNewShop() {
    const dialogRef = this.dialog.open(AddshopComponent,
      {
        width:'50%',
        panelClass: 'custom-modalbox'
        
      });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllShops()
    });
  }

  showBooks(element:BookShop){
    const dialogRef = this.dialog.open(BooksinshopComponent,{
      data:element.books,
      width:'50%',
      panelClass: 'custom-modalbox'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllShops()
    });
  }


}
