import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListComponetComponent } from './list-componet/list-componet.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    ChildComponentComponent,
    HomeComponentComponent,
    ListComponetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
