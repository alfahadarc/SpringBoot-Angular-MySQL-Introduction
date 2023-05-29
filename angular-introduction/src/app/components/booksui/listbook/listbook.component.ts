import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/book/books.service';
import {MatDialog} from '@angular/material/dialog';
import { EditbookComponent } from '../editbook/editbook.component';


@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {

  private books:any;
  constructor(private bookService: BooksService,public dialog: MatDialog) {
this.getAllBooks();
   
  }
  getAllBooks(){
    this.bookService.findAll().subscribe({
      next: (v) => {
        this.books=v
        this.dataSource = this.books
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  });
  }

  displayedColumns: string[] = ['title', 'author', 'genre', 'price', 'publisher', 'yearOfPublish', 'actions'];
  dataSource:any;

  ngOnInit(): void {
  }
  edit(row:any){
    const dialogRef = this.dialog.open(EditbookComponent, {
      data: row,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllBooks()
    });
  }
  remove(row:any){
    this.bookService.remove(row.id).subscribe({
      next:(v)=>{
        console.log(v)
        this.getAllBooks()
      },
      error:(err)=> {
        console.log(err)
      },
    })
  }
  
}
