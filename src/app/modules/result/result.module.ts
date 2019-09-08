import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ResultViewComponent } from "./component/result-view/result-view.component";
import { ResultFormComponent } from "./component/result-form/result-form.component";
import { ZsResultCounterModule } from 'zs-result-counter';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ZsResultCounterModule
  ],
  declarations: [ResultViewComponent, ResultFormComponent],
  exports: [ResultViewComponent, ResultFormComponent]
})
export class ResultModule {}
