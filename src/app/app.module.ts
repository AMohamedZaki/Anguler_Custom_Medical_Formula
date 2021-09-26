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
import { ButtonsComponent } from './components/formula-container/components/buttons/buttons.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { PreviewDialogComponent } from './preview-dialog/preview-dialog.component';
import { TagsTestComponent } from './tags-test/tags-test.component';
import { TagInputModule } from 'ngx-chips';
import { FormulaComponent } from './formula/formula.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RuleMainComponent } from './components/rule-main/rule-main.component';
import { BranchesComponent } from './components/branches/branches.component';
import { MatChipsModule } from '@angular/material/chips';
import { FormulaContainerComponent } from './components/formula-container/formula-container.component';
import { FormulaInputsComponent } from './components/formula-container/components/formula-inputs/formula-inputs.component';
import { FormulaTextAreaComponent } from './components/formula-container/components/formula-text-area/formula-text-area.component';
import { ButtonInputsComponent } from './components/formula-container/components/button-inputs/button-inputs.component';

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
    BranchesComponent,
    FormulaContainerComponent,
    FormulaInputsComponent,
    FormulaTextAreaComponent,
    ButtonInputsComponent,
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
    MatInputModule,
    MatChipsModule,
    ReactiveFormsModule,
  ],
  providers: [BracketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
