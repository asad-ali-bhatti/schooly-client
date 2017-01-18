import {Component} from "@angular/core";
import {Student} from "./student";
import {ActivatedRoute, Routes, Route, Router} from "@angular/router";
import {StudentService} from "./student.service";
import {NotificationsService} from "angular2-notifications";

@Component({
  selector: 'sc-student-edit',
  templateUrl: 'student-edit.component.html',
  providers: [StudentService]
})

export class StudentEditComponent{
  student = new Student();
  id: number;

  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService, private _notificationService: NotificationsService){
  }

  ngOnInit(){
    this.route.params.subscribe((params) => this.id = params['id']);
    this.studentService.getStudent(this.id).subscribe( (student) => this.student = student )
  }

  updateStudent(student){
    this.studentService.updateStudent(student).subscribe( (student) => this._notificationService.success('Success', 'Student Updated'));
    this.router.navigate(['/students']);
  }
}
