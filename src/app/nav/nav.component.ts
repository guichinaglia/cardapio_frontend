import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(){}


  //isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //  .pipe(
  //    map(result => result.matches)
  //  );
  //
  //constructor(private breakpointObserver: BreakpointObserver) {}

}
