import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Review } from '../../Review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  
  reviews: Review[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getReviews().subscribe((reviews) => {this.reviews = reviews});
  }

}
