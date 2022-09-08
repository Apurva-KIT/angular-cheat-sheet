import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorizontalFormComponent } from './horizontal-form/horizontal-form.component';
import { CompareConactsComponent } from './horizontal-form/components/compare-conacts/compare-conacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HorizontalFormComponent,
    CompareConactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
