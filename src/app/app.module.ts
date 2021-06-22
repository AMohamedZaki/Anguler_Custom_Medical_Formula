import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { BracketService } from './service/bracket.service';
import { SafeHtml } from './pipe/safeByHtml.pipe';
import { ButtonsComponent } from './buttons/buttons.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [AppComponent, ToolBarComponent, SafeHtml, ButtonsComponent, EditDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [BracketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
