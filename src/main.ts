import 'zone.js';
import { Component, Input } from '@angular/core'; // Import Input here
import { bootstrapApplication } from '@angular/platform-browser';

// Reusable Card Component
@Component({
  selector: 'info-card',
  standalone: true,
  template: `
    <div class="card-container">
      <div class="card">
        <div class="card-content">
          <h2>{{name}}</h2>
          <p>{{title}}</p>
          <p>{{company}}</p>
          <p>{{email}}</p>
          <p>{{phone}}</p>
          <p>{{address}}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card-container {
      perspective: 1000px; /* Required for 3D flip effect */
    }
    .card {
      width: 300px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      font-family: Arial, sans-serif;
      margin-bottom: 20px; /* Margin for spacing between cards */
      position: relative;
      transition: transform 0.6s;
      background: rgba(255, 255, 255, 0.8); /* Glass-like effect */
      backdrop-filter: blur(10px); /* Glass effect */
    }
    .card-container:hover .card {
      transform: rotateY(180deg); /* Flip effect on hover */
    }
    .card-content {
      backface-visibility: hidden; /* Hide content on flip */
      color: #333;
    }
    .card-back {
      backface-visibility: hidden; /* Hide back face */
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      transform: rotateY(180deg); /* Flip the back side */
      color: #333;
    }
    h2 {
      color: #333;
      margin-bottom: 10px;
    }
    p {
      color: #666;
      margin: 5px 0;
    }
  `]
})
export class InfoCard {
  @Input() name!: string;
  @Input() title!: string;
  @Input() company!: string;
  @Input() email!: string;
  @Input() phone!: string;
  @Input() address!: string;
}

// Main Application Component
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <info-card 
      name="John Doe" 
      title="Software Developer" 
      company="Tech Solutions Inc." 
      email="john.doe@example.com" 
      phone="+1 234 567 8900" 
      address="123 Main St, Anytown, USA">
    </info-card>
    <info-card 
      name="Jane Smith" 
      title="Product Manager" 
      company="Innovate Corp." 
      email="jane.smith@example.com" 
      phone="+1 987 654 3210" 
      address="456 Elm St, Othertown, USA">
    </info-card>
  `,
  imports: [InfoCard] // Import InfoCard here
})
export class App {}

bootstrapApplication(App);
