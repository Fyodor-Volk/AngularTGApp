import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { FeatbackComponent } from './pages/featback/featback.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
    {path:'', component: ShopComponent, pathMatch: 'full' },
    {path: 'featback', component: FeatbackComponent, },
    {path: 'product/:id', component: ProductComponent}
];
