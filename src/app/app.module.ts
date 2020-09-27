import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { EntityExampleModule } from './modules/entity-example/entity-example.module';
import { reducers as appReducers } from './store/app.reducers';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers, {}),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    EntityExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
