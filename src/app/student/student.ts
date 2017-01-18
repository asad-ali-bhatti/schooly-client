export  class Student{
  constructor(public id?: number,
              public first_name?: string,
              public last_name?: string,
              public phone?: string,
              public email?: string,
              public parent_phone?: string,
              public parent_email?: string){}

  full_name(): string{
    return `${this.first_name} ${this.last_name}`
  }
}
