import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetailsCourses {
  courses = [
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
      id: 2,
      image: 'assets/img/c++.png',
      name: 'C++',
      description:
        'C++ is a high-level programming language developed by Bjarne Stroustrup in the early 1980s as an extension of the C language. It supports object-oriented programming, allowing developers to create classes and objects, which helps in organizing and managing complex software projects.',
      oldPrice: 20,
      newPrice: 'Free',
      students: 1200,
      lessons: 15,
      rating: 4.5,
    },
    {
      id: 3,
      image: 'assets/img/flutter.svg',
      name: 'Flutter',
      description:
        'Flutter is an open-source UI toolkit developed by Google for building natively compiled applications for mobile, web, and desktop from a single codebase. It uses the Dart programming language and allows developers to create visually attractive and high-performance applications.',
      oldPrice: 50,
      newPrice: 'Free',
      students: 587,
      lessons: 27,
      rating: 4.5,
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
      id: 5,
      image: 'assets/img/java.png',
      name: 'Java',
      description:
        'Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle) in the mid-1990s. It is designed to be platform-independent, which means that Java applications can run on any device that has the Java Virtual Machine (JVM) installed..',
      oldPrice: 40,
      newPrice: 'Free',
      students: 465,
      lessons: 15,
      rating: 4.5,
    },
    {
      id: 6,
      image: 'assets/img/js4.jfif',
      name: 'Javascript',
      description:
        'Embark on a journey to master JavaScript, the programming language that powers the web! This course is designed for anyone eager to learn how to create interactive and dynamic web applications. From foundational concepts to advanced techniques, you will gain the skills needed to bring your web projects to life.',
      oldPrice: 70,
      newPrice: 'Free',
      students: 1785,
      lessons: 30,
      rating: 4.5,
    },
    {
      id: 7,
      image: 'assets/img/python.png',
      name: 'Python',
      description:
        'Python is a high-level, interpreted programming language known for its simplicity and readability. It was created by Guido van Rossum and released in 1991. Python is widely used in various fields, including web development, data analysis, artificial intelligence, scientific computing, and automation..',
      oldPrice: 20,
      newPrice: 'Free',
      students: 890,
      lessons: 9,
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
      id: 9,
      image: 'assets/img/download.png',
      name: 'Tailwind',
      description:
        'Join our Tailwind CSS course and discover the power of utility-first design! Tailwind CSS simplifies the styling process, enabling you to build responsive and aesthetically pleasing web interfaces quickly. This course is tailored for developers and designers who want to enhance their skills and adopt modern development practices.',
      oldPrice: 30,
      newPrice: 'Free',
      students: 750,
      lessons: 10,
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
  ];

  index() {
    return this.courses;
  }
  show(_id: number) {
    return this.courses.find((item) => item.id == _id);
  }
}
