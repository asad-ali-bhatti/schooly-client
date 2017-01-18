import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Student} from "./student";

@Injectable()
export class StudentService {
  base_url: string = 'http://localhost:3000';

  constructor(private _http: Http){}

  getStudents(): Observable<Student[]>{
    let url = this.base_url + '/students';
    return this._http.get(url).map((res: Response) => <Student[]>res.json())
                              .catch((error: any) => Observable.throw(error.message))
  }

  createStudent(student: Student): Observable<Student>{
    let url = this.base_url + '/students';
    let headers = new Headers({'Content-Type': 'application/json'});

    return this._http.post(url, JSON.stringify(student) ,{headers: headers}).map((res: Response) => <Student>res.json())
  }

  getStudent(id): Observable<Student>{
    let url = this.base_url + '/students/' + id;
    return this._http.get(url).map((res: Response) => <Student>res.json());
  }

  updateStudent(student: Student): Observable<Student>{
    let url = this.base_url + '/students/' + student.id;
    let headers = new Headers({'Content-Type': 'application/json'});

    return this._http.put(url, JSON.stringify(student), {headers: headers}).map((res: Response) => <Student>res.json())
  }
}
