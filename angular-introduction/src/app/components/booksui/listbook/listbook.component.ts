import { Component, OnInit, ViewChild } from '@angular/core';
import { BooksService } from 'src/app/services/book/books.service';
import { MatDialog } from '@angular/material/dialog';
import { EditbookComponent } from '../editbook/editbook.component';
import { ToastrService } from 'ngx-toastr';
import { AddbookComponent } from '../addbook/addbook.component';
import { Book } from 'src/app/models/book';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private bookService: BooksService, public dialog: MatDialog,
    private toastrService: ToastrService) {
  
    this.getAllBooks();

  }
  getAllBooks() {
    this.bookService.findAll().subscribe({
      next: (v) => {
        this.dataSource = new MatTableDataSource(v)
      this.dataSource.paginator = this.paginator;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  displayedColumns: string[] = ['Title', 'author', 'genre', 'price', 'publisher', 'yearOfPublish', 'actions'];
  dataSource!: MatTableDataSource<Book>;

  ngOnInit(): void {
  }

  edit(row: Book) {
    const dialogRef = this.dialog.open(EditbookComponent, {
      data: row,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllBooks()
    });
  }
  remove(row: Book) {
    this.bookService.remove(row.id).subscribe({
      next: (v) => {
        console.log(v)
        this.toastrService.warning("Successfully Removed", "Removed")
        this.getAllBooks()
      },
      error: (err) => {
        console.log(err)
        this.toastrService.error(err.error.error, "Error")
      },
    })
  }

  goAddNewBook() {
    const dialogRef = this.dialog.open(AddbookComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getAllBooks()
    });
  }



}
