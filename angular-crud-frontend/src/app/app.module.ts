import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquidModule } from '@squidcloud/angular';

import { InsertProjectComponent } from './insert-project/insert-project.component';
import { ReadProjectComponent } from './read-project/read-project.component';
import { TableComponent } from './table/table.component';
import { OptionsComponent } from './options/options.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { OptionsDialogComponent } from './options-dialog/options-dialog.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { DeleteProjectComponent } from './delete-project/delete-project.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertProjectComponent,
    ReadProjectComponent,
    UpdateProjectComponent,
    DeleteProjectComponent,
    TableComponent,
    OptionsComponent,
    OptionsDialogComponent,
  ],
  imports: [
    SquidModule.forRoot({
      appId: '3ma7kty4bszz6cu4qo',
      region: 'ap-south-1.aws',
      environmentId: 'dev', // choose one of 'dev' or 'prod'
      squidDeveloperId: 'u07bar8gytd8kp42o5',
    }),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
