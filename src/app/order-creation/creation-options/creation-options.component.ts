import { Component, OnInit, AfterContentChecked } from '@angular/core';

import { CombinationsService } from '../../services/combinations.service'
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Ingredient } from 'src/app/model/ingredient';


@Component({
  selector: 'app-creation-options',
  templateUrl: './creation-options.component.html',
  styleUrls: ['./creation-options.component.css']
})
export class CreationOptionsComponent implements OnInit {

  constructor(private combinationsService: CombinationsService) { }

  displayedColumns: string[] = ['id', 'name', 'ingredients', 'total', 'actions'];
  combinations : any = [];
  isLoadingResults = false;
  total: number;

  ngOnInit() {
    this.list();
    console.log(this.combinations);
  }

  list() {
    this.combinationsService.findAll().subscribe(
      res => {
        this.combinations = res,
        console.log(this.combinations);
      },
      error => {
        console.log(error);
        this.isLoadingResults = false
      }
    )
  }

  sum(obj) {
    //console.log();
    //var sum = this.combinations.reduce((prev, ingPrice) => prev + ingPrice.number, 0);
    //console.log(sum);
    //return sum;

    var sum = sum + obj;
  }

  

}
