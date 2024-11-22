import { Injectable } from '@angular/core';
import { Icourses } from './icources';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  coursesList:Icourses[]=[
    {
    id: 1,
    title: "CSS Course",
    image: "assets/img/CSS.png",
    description: "Learn the basics of CSS.",
    price: "$30",
    lessonsInfo: "6 Lessons / 2 week",
    students: "895 students"
  },
  {
    id: 2,
    title: "C++ Course",
    image: "assets/img/c++.png",
    description: "Dive into C++ programming.",
    price: "$20",
    lessonsInfo: "15 Lessons / 5 week",
    students: "1,200 students"
  },
  {
    id:3,
    title: "Flutter Course",
    image: "assets/img/flutter.svg",
    description: "Build apps with Flutter.",
    price: "$50",
    lessonsInfo: "27 Lessons / 9 week",
    students: "587 students"
  },
  {
    id: 4,
    title: "HTML Course",
    image: "assets/img/html.png",
    description: "Learn the fundamentals of HTML.",
    price: "$20",
    lessonsInfo: "6 Lessons / 2 week",
    students: "1,895 students"
  },
  {
    id: 5,
    title: "Java Course",
    image: "assets/img/java.png",
    description: "Master Java programming.",
    price: "$40",
    lessonsInfo: "15 Lessons / 5 week",
    students: "465 students"
  },
  {
    id: 6,
    title: "JavaScript Course",
    image: "assets/img/javascript-logo.png",
    description: "Understand JavaScript basics.",
    price: "$70",
    lessonsInfo: "30 Lessons / 10 week",
    students: "1,785 students"
  },
  {
    id: 7,
    title: "Python Course",
    image: "assets/img/python.png",
    description: "Learn Python programming.",
    price: "$20",
    lessonsInfo: "9 Lessons / 3 week",
    students: "890 students"
  },
  {
    id: 8,
    title: "Angular Course",
    image: "assets/img/angular.jpg",
    description: "Introduction to Angular concepts.",
    price: "$70",
    lessonsInfo: "15 Lessons / 5 week",
    students: "550 students"
  },
  {
    id: 9,
    title: "Tailwind Course",
    image: "assets/img/tailwind.png",
    description: "Tailwind CSS.",
    price: "$30",
    lessonsInfo: "10 Lessons / 3 week",
    students: "750 students"
  },
  {
    id: 10,
    title: "Bootstrap Course",
    image: "assets/img/Bootstrap.jpeg",
    description: "Bootstrap CSS.",
    price: "$30",
    lessonsInfo: "8 Lessons / 2 week",
    students: "950 students"
  }
  ]

  index()
	{	
		return this.coursesList
	}
  show(_id:number)
	{	
		return this.coursesList.find(item => item.id=_id)	
	}
}
