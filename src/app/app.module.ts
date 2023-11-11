import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmailChildComponent } from './email-child/email-child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { TreeContainerComponent } from './tree-container/tree-container.component';
import { TreeDataService } from './services/tree-data.service';
import { TreeListComponent } from './tree-list/tree-list.component';
import {CdkTreeModule} from '@angular/cdk/tree';
@NgModule({
  declarations: [
    AppComponent,
    EmailChildComponent,
    ParentFormComponent,
    TreeContainerComponent,
    TreeListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    CdkTreeModule
  ],
  providers: [TreeDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
