import { Component, OnInit, Input } from '@angular/core';
import {FoodItem} from '../fooditems/FoodItem';
 
@Component({
  selector: 'app-fooditem-detail',
  templateUrl: './fooditem-detail.component.html',
  styleUrls: ['./fooditem-detail.component.css']
})
export class FooditemDetailComponent implements OnInit {

  @Input() foodItem?: FoodItem;
  
  constructor() { }

  ngOnInit(): void {
  }

}
