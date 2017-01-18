import {Component} from "@angular/core";
import {Student} from "./student";
import {StudentService} from "./student.service";

@Component({
  selector: 'sc-students',
  templateUrl: './student-list.component.html',
  providers: [StudentService]
})
export class StudentListComponent {
  students: Student[];

  constructor(private studentService: StudentService){
  }

  ngOnInit(){
    this.studentService.getStudents().subscribe((res)=> this.students = res );
  }
}
