import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import customers from '../../shared/data/data';
import { filter } from 'minimatch';
//import { Router, RouterModule } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-customerdata',
  templateUrl: './customerdata.component.html',
  styleUrls: ['./customerdata.component.scss']
})
export class CustomerdataComponent implements OnInit {

  identifier: any;
  idd:number=0;

  constructor(private route: ActivatedRoute, private router: Router) {

    //this.router.navigate(['/caca']);

  }


  ngOnInit() { // Interface
    // this.identifier= this.route.snapshot.params['id']; // Genera un objeto cada vez
    this.route.params.subscribe(miParams => {this.idd = miParams['id'];}); // Observable

    this.identifier = customers.find(e => { return e.index == this.idd;});

    if (this.identifier===undefined) this.router.navigate(['/caca']);


/*
    this.identifier = customers.find(function(elem , idd) {
      if (elem.index === idd) {
        return elem;
      }
    }
    );
*/


//this.router.navigate(['/caca'], {});
    /*
var existe = customers.findIndex(x => x.index === this.id);

    if (existe) {
      this.identifier = customers[this.id];
    } else {
      this.router.navigate(['/customerdddd']);
    }
*/
  }

}
