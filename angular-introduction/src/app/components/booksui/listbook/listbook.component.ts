import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/book/books.service';


@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {

  private books:any;
  constructor(private bookService: BooksService) {

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

}
