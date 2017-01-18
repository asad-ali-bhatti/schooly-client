import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {StudentListComponent} from "./student-list.component";
import {StudentNewComponent} from "./student-new.component";
import {FormsModule} from "@angular/forms";
import {StudentShowComponent} from "./student-show.component";
import {RouterModule} from "@angular/router";
import {StudentEditComponent} from "./student-edit.component";

@NgModule({
  declarations: [StudentListComponent, StudentNewComponent, StudentShowComponent, StudentEditComponent],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class StudentModule {
}
