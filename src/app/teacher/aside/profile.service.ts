import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

 /** image */
private profileimg:string="../../assets/img/img0.jpg";

  constructor() { }

  get profileImg(): string {
    return this.profileimg;
  }

  set profileImg(image: string) {
    this.profileimg = image;
  }

  /** data */

    TeacherData = {
    firstName: 'Jackson',
    lastName: 'John',
    email: 'JacksonJohn@example.com',
    phoneNumber: '0123456789',
    password: 'securepassword',
    confirmpassword:'securepassword',
    address: 'cairo',
    age: 20,
    website:'Johnwebsite.com',
    languages:['English','Spanish','Frensh'],
    Degree:"Master's in Education",
    Institution:'University of Education',
    YearofGraduation:'2015',
    CurrentPosition: 'Senior Teacher at XYZ School',
    PreviousExperience: 'Teacher at ABC School (5 years)',
    
    courses: [
      {
        id: 1,
        image:
          'assets/img/angular.jfif',
        name: 'Angular',
        description:
          'Embark on a journey to master Angular, one of the leading frameworks for building dynamic web applications. This course is designed for developers of all skill levels, providing you with the knowledge and tools to create responsive, maintainable, and scalable applications.',
        oldPrice: 200,
        newPrice:'Free',
        students: 120,
        lessons: 10,
        rating: 4.9,
      },
      {
        id: 2,
        image: 'assets/img/html.jfif',
        name: 'HTML',
        description:
          'This HTML code creates a responsive and aesthetically pleasing course details section using Bootstrap and custom CSS. The design places an emphasis on showcasing the course image and providing detailed information about the course in a clean, professional layout.',
        oldPrice: 400,
        newPrice:'Free',
        students: 120,
        lessons: 15,
        rating: 4.5,
      },
      {
        id: 3,
        image: 'assets/img/css3.jfif',
        name: 'CSS',
        description:
          "Unlock the power of Cascading Style Sheets (CSS) in this dynamic course designed for web enthusiasts eager to create visually stunning websites. From the fundamentals to advanced techniques, you'll learn how to effectively style web pages and enhance user experiences.",
        oldPrice: 150,
        newPrice: 'Free',
        students: 120,
        lessons: 15,
        rating: 4.5,
      },
      {
        id: 4,
        image: 'assets/img/download.png',
        name: 'Tailwind',
        description:
          'Join our Tailwind CSS course and discover the power of utility-first design! Tailwind CSS simplifies the styling process, enabling you to build responsive and aesthetically pleasing web interfaces quickly. This course is tailored for developers and designers who want to enhance their skills and adopt modern development practices.',
        oldPrice: 300,
        newPrice: 'Free',
        students: 120,
        lessons: 15,
        rating: 4.5,
      },
      {
        id: 5,
        image: 'assets/img/js4.jfif',
        name: 'Javascript',
        description:
          'Embark on a journey to master JavaScript, the programming language that powers the web! This course is designed for anyone eager to learn how to create interactive and dynamic web applications. From foundational concepts to advanced techniques, you will gain the skills needed to bring your web projects to life.',
        oldPrice: 400,
        newPrice: 'Free',
        students: 120,
        lessons: 15,
        rating: 4.5,
      },
      {
        id: 6,
        image: 'assets/img/bootstrap5.jfif',
        name: 'Bootstrap',
        description:
          'Step into the world of responsive web design with our Bootstrap course! Bootstrap is a powerful front-end framework that allows developers to create modern, mobile-first websites quickly and efficiently. This course covers everything from the basics to advanced features, equipping you with the skills needed to build visually appealing and user-friendly web applications.',
        oldPrice: 230,
        newPrice: 'Free',
        students: 120,
        lessons: 15,
        rating: 4.5,
      },
    ],
    
    
  };

  
  index() {
    return this.TeacherData;
  }

  show(_id: any) {
    return this.TeacherData.courses.find((course) => course.id === _id);
  }


}






