import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "./student.service";
import {Student} from "./student";
@Component({
  selector: 'sc-student-show',
  templateUrl: 'student-show.component.html',
  providers: [StudentService]
})
export class StudentShowComponent {
  id: number;
  student = new Student();

  constructor(private route: ActivatedRoute, private studentService: StudentService){
  }

  ngOnInit(){
    this.route.params.subscribe((params) => this.id = +params['id']);
    this.studentService.getStudent(this.id).subscribe((student) => this.student = student)
  }
}
