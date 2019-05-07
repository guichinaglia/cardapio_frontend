import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { IngredientsService } from '../../services/ingredients.service';
import { Ingredient } from 'src/app/model/ingredient';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ingredientForm: FormGroup;
  name: string = '';
  price: number = null;
  isLoadingResults = false;


  //constructor(private router: Router, private api: IngredientsService, private formBuilder: FormBuilder) { }
  constructor(private api: IngredientsService, private formBuilder: FormBuilder, protected changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    
    console.log("ENTRO");
  
    this.ingredientForm = this.formBuilder.group(
      {
        ingName : [null, Validators.nullValidator],
        ingPrice : [null, Validators.nullValidator],
      }
    );
    console.log("ingredientForm > " + this.ingredientForm.value);
  }
  
  onFormSubmit(form: NgForm) {
    this.api.save(form)
      .subscribe(res => {
        let id = res['id'];
        this.isLoadingResults = true;
        //this.router.navigate(['/product-details', id]);
        this.ingredientForm.reset();
        
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false
      }
    );
  } 
}
 