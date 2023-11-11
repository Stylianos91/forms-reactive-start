import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmailChildComponent } from './email-child/email-child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TreeContainerComponent } from './tree-container/tree-container.component';
import { TreeDataService } from './services/tree-data.service';

@NgModule({
  declarations: [
    AppComponent,
    EmailChildComponent,
    ParentFormComponent,
    TreeContainerComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [TreeDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
