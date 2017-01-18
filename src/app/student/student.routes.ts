import {Routes} from "@angular/router";
import {StudentListComponent} from "./student-list.component";
import {StudentNewComponent} from "./student-new.component";
import {StudentShowComponent} from "./student-show.component";
import {StudentEditComponent} from "./student-edit.component";

export const studentRoutes: Routes = [
  {path: 'students', component: StudentListComponent},
  {path: 'students/new', component: StudentNewComponent},
  {path: 'students/:id', component: StudentShowComponent},
  {path: 'students/:id/edit', component: StudentEditComponent}
];
