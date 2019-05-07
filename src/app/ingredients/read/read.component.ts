import { Component, OnInit } from '@angular/core';

import { IngredientsService } from '../../services/ingredients.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(
    private ingredientsService: IngredientsService
  ) { }

  isLoadingResults = false;
  displayedColumns: string[] = ['id', 'name', 'price','actions'];
  ingredients : any = [];

  ngOnInit(): void {
    this.list();
    console.log(this.ingredients);
  }

  list() {
    this.ingredientsService.findAll().subscribe(
      temp => {
        this.ingredients = temp,
        console.log(this.ingredients)
      },
      error => {
        console.log(error);
        this.isLoadingResults = false
      }
    );
  }

  delete(id: any) {
    console.log("entrou");
    console.log("delete("+id+")");
    this.ingredientsService.delete(id).subscribe(
      temp => {
        this.ingredients = temp,
        this.list();
      },
    );
  }





}
