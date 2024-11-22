import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  studentData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    imagePath: '../../assets/img/img0.jpg',
    phoneNumber: '0123456789',
    facebook: '',
    linkedIn: '',
    password: 'securepassword',
    address: 'cairo',
    age: 20,
    courses: [
      {
        id: 1,
        image: 'assets/img/css3.jfif',
        name: 'CSS',
        description:
          "Unlock the power of Cascading Style Sheets (CSS) in this dynamic course designed for web enthusiasts eager to create visually stunning websites. From the fundamentals to advanced techniques, you'll learn how to effectively style web pages and enhance user experiences.",
        oldPrice: 30,
        newPrice: 'Free',
        students: 895,
        lessons: 6,
        rating: 4.9,
      },
      {
        id: 4,
        image: 'assets/img/html.jfif',
        name: 'HTML',
        description:
          'This HTML code creates a responsive and aesthetically pleasing course details section using Bootstrap and custom CSS. The design places an emphasis on showcasing the course image and providing detailed information about the course in a clean, professional layout.',
        oldPrice: 20,
        newPrice: 'Free',
        students: 1895,
        lessons: 6,
        rating: 4.5,
      },
      {
        id: 8,
        image: 'assets/img/angular.jfif',
        name: 'Angular',
        description:
          'Embark on a journey to master Angular, one of the leading frameworks for building dynamic web applications. This course is designed for developers of all skill levels, providing you with the knowledge and tools to create responsive, maintainable, and scalable applications.',
        oldPrice: 70,
        newPrice: 'Free',
        students: 550,
        lessons: 15,
        rating: 4.5,
      },
      {
        id: 10,
        image: 'assets/img/bootstrap5.jfif',
        name: 'Bootstrap',
        description:
          'Step into the world of responsive web design with our Bootstrap course! Bootstrap is a powerful front-end framework that allows developers to create modern, mobile-first websites quickly and efficiently. This course covers everything from the basics to advanced features, equipping you with the skills needed to build visually appealing and user-friendly web applications.',
        oldPrice: 30,
        newPrice: 'Free',
        students: 950,
        lessons: 8,
        rating: 4.5,
      },
    ],
    attendance: 95,
    grades: {
      JavaScript: 'A',
      Python: 'A-',
      React: 'B+',
      NodeJS: 'A',
      SQL: 'B',
    },
  };

  index() {
    return this.studentData;
  }

  show(id: any) {
    return this.studentData.courses.find((course) => course.id === id);
  }
}
