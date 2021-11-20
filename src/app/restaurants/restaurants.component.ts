import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [];

  constructor(private RestaurantsService: RestaurantsService) { }

  ngOnInit(): void {
    this.RestaurantsService.restaurants().subscribe(restaurants => {
      this.restaurants = restaurants;
    });

  }

}
