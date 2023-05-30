import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BooksService } from 'src/app/services/book/books.service';
import { ShopService } from 'src/app/services/shop/shop.service';

@Component({
  selector: 'app-addshop',
  templateUrl: './addshop.component.html',
  styleUrls: ['./addshop.component.css']
})
export class AddshopComponent implements OnInit {

  shopForm!:FormGroup
  availableBooks:any;
  constructor(public dialogRef:MatDialogRef<AddshopComponent>,private formBuilder:FormBuilder,private shopService:ShopService,private toastrService: ToastrService, private bookService:BooksService) { }

  ngOnInit(): void {
    this.createForm();
    this.getAllBooks();
  }

  getAllBooks(){
    this.bookService.findAll().subscribe({
      next: (v) => {
        this.availableBooks=v
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  });
  }
  createForm(){
    this.shopForm = this.formBuilder.group({
      title: ["", Validators.required],
      location: ["", Validators.required],
      contactNo: ["", Validators.required],
      email: ["", Validators.required],
      selectedBook:[""],
      books:  this.formBuilder.array([])
    });
  }

  addBook() {
    const selectedBookControl = this.shopForm.get('selectedBook');
  
    if (selectedBookControl && selectedBookControl.value) {
      const selectedBookId = selectedBookControl.value;
      
      // Find the selected book object from the availableBooks array
      const selectedBook = this.availableBooks.find((book: any) => book.id==selectedBookId);
      if (selectedBook) {
        const booksArray = this.shopForm.get('books') as FormArray;
        booksArray.push(new FormControl(selectedBook));
  
        // Remove the selected book from the available books list
        const index = this.availableBooks.findIndex((book: any) => book.id == selectedBookId);
        if (index !== -1) {
          this.availableBooks.splice(index, 1);
        }
  
        // Reset the selectedBook form control
        selectedBookControl.reset();
      }
    }
  }
  
  


  onSubmit() {
    if (this.shopForm.invalid) {
      return;
    }
   
    this.shopForm.removeControl("selectedBook")
    console.log(this.shopForm.value)
  
    this.shopService.add( this.shopForm.value).subscribe(
     { next: (v)=>{
        console.log(v)
        this.toastrService.success("Successfully Added", "Success")
        this.dialogRef.close();
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    })
   
  }

}
