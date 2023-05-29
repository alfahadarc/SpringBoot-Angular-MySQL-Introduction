import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from 'src/app/services/book/books.service';


@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
  bookForm!: FormGroup;
  constructor( public dialogRef: MatDialogRef<EditbookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private formBuilder: FormBuilder,
    private bookService:BooksService) { }

  ngOnInit(): void {
    //console.log(this.data)
    this.createForm()
    this.initializeFormWithData(this.data)
  }

  createForm(){
    this.bookForm = this.formBuilder.group({
      title: [null, Validators.required],
      price: [0.0, Validators.required],
      yearOfPublish: [0, Validators.required],
      author: [null, Validators.required],
      genre: [null, Validators.required],
      publisher: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.bookForm.invalid) {
      return;
    }
  
    this.bookService.edit(this.data.id, this.bookForm.value).subscribe(
     { next: (v)=>{
        console.log(v)
        this.dialogRef.close();
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    })
   
  }

  initializeFormWithData(data: any) {
    this.bookForm.patchValue(data);
  }

  

}
