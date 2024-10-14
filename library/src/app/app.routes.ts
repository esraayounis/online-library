import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { BookDetailsComponent } from './features/books/book-details/book-details.component';
import { AuthorDetailsComponent } from './features/authors/author-details/author-details.component';
import { WishlistComponent } from './features/whishlist/wishlist/wishlist.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
    {path: '',redirectTo:'home',pathMatch:'full'},
    {path: 'home',component:HomeComponent,title:'Home'},
    {path: 'book/:id',component:BookDetailsComponent,title:'Book Details'},
    {path: 'author',component:AuthorDetailsComponent,title:'Author'},
    {path: 'wishlist',component:WishlistComponent,title:'Wishlist'},
    {path: 'not-found',component:NotFoundComponent,title:'Not Found'},
    {path: '**', redirectTo: 'not-found', pathMatch: 'full'},
];
