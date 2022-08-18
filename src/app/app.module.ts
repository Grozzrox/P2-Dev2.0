import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesService } from './Services/courses.service';
import { GamesComponent } from './games/games.component';
import { SearchComponent } from './search/search.component';
import { GameComponent } from './games/game/game.component';
import { DiscoverComponent } from './discover/discover.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewComponent } from './reviews/review/review.component';
import { ReviewGameComponent } from './review-game/review-game.component';

// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Game', component: GameComponent},
  {path: 'Discover', component: DiscoverComponent},
  {path: 'Games', component: GamesComponent},
  {path: 'Reviews', component: ReviewsComponent},
  {path: 'ReviewGame', component: ReviewGameComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    HomeComponent,
    GamesComponent,
    SearchComponent,
    GameComponent,
    DiscoverComponent,
    ReviewsComponent,
    ReviewComponent,
    ReviewGameComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
