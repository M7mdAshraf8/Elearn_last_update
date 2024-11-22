import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {

  constructor() {
    setTimeout(() => {
      this.observeCounters();
    }, 0);
  }
  observeCounters(): void {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counterElement = entry.target as HTMLElement;
          const targetValue = +counterElement.getAttribute('data-target')!; 
          this.animateCounter(counterElement, targetValue); 
          observer.unobserve(counterElement); 
        }
      });
    }, { threshold: 0.75 });

    counters.forEach((counter) => {
      observer.observe(counter);
    });
  }
  animateCounter(counterElement: HTMLElement, targetValue: number): void {
    const increment = targetValue / 150; 
    const updateCount = () => {
      const currentCount = +counterElement.innerText; 
      if (currentCount < targetValue) {
        counterElement.innerText = Math.ceil(currentCount + increment).toString(); 
        setTimeout(updateCount, 20); 
      } else {
        counterElement.innerText = targetValue.toString(); 
      }
    };
    updateCount();
  }
}
