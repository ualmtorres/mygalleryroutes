import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    {path: '', redirectTo: '/gallery', pathMatch: 'full'},
    {path: 'gallery', component: GalleryComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent}
  ];

export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);