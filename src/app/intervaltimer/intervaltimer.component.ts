import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-intervaltimer',
  templateUrl: './intervaltimer.component.html',
  styleUrls: ['./intervaltimer.component.css']
})

export class IntervaltimerComponent implements OnInit {
  title = 'toolset';
  data:number =0;

  ngOnInit(): void {
    const obs$ =interval(1000)
    obs$.subscribe((d) => {
      console.log(d);
      this.data=d;
   
        //const obs$ =interval(2000);
       // const ons$= timer(5000,1000);
      // ons$.subscribe((d) =>{
     // console.log(d);
    //this.data=d;
    });
    }
  }