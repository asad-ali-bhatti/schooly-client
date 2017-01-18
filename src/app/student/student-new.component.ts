import {Component} from "@angular/core";
import {Student} from "./student";
import {StudentService} from "./student.service";
import {NotificationsService} from "angular2-notifications";
import {Router} from "@angular/router";

@Component({
  selector: 'sc-student-new',
  templateUrl: 'student-new.component.html',
  providers: [StudentService]
})
export class StudentNewComponent {
  student = new Student();

  constructor(private studentService: StudentService, private _notificationService: NotificationsService, private router: Router){
  }

  createStudent(student){
    this.studentService.createStudent(student).subscribe((res) => this._notificationService.success('Success', 'Student Created!') );
    this.router.navigate(['/students'])
  }
}
