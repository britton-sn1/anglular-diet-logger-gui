import { Component, OnInit } from '@angular/core';
import { FoodItem } from './FoodItem';
import { FOODITEMS } from './mock-fooditems';

@Component({
	selector: 'app-fooditems',
	templateUrl: './fooditems.component.html',
	styleUrls: ['./fooditems.component.css']
})
export class FooditemsComponent implements OnInit {

	foodItems = FOODITEMS;
	selectedFoodItem? : FoodItem;
		
	constructor() { }

	ngOnInit(): void {
	}
	
	onSelect(foodItem: FoodItem) : void {
		this.selectedFoodItem = foodItem;
	}

}
