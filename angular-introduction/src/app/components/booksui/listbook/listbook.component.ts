import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/book/books.service';


@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {

  constructor(private bookService: BooksService) {

    this.bookService.findAll().subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  });
  }

  ngOnInit(): void {
  }

}
