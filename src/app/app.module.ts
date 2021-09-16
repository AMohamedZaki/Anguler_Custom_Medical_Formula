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
import { PreviewDialogComponent } from './preview-dialog/preview-dialog.component';
import { TagsTestComponent } from './tags-test/tags-test.component';
import { TagInputModule } from 'ngx-chips';
import { FormulaComponent } from './formula/formula.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RuleMainComponent } from './components/rule-main/rule-main.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    SafeHtml,
    ButtonsComponent,
    EditDialogComponent,
    PreviewDialogComponent,
    TagsTestComponent,
    FormulaComponent,
    MainComponent,
    RuleMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    TagInputModule,
    FormsModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [BracketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
