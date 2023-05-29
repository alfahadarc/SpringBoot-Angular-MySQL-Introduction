import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booksui',
  templateUrl: './booksui.component.html',
  styleUrls: ['./booksui.component.css']
})
export class BooksuiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goAddNewJob() {
    this.router.navigate(['addBook']);
  }

}
