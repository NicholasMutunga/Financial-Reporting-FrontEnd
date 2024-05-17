import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-user-guide',
  templateUrl: './user-guide.component.html',
  styleUrls: ['./user-guide.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class UserGuideComponent implements OnInit {

  
  faqs = [
    {
      question: 'Can I edit my ticket after submission?',
      answer: 'Yes, you can edit your ticket after submission. However, please note that once a ticket is closed, it cannot be edited.',
      showAnswer: false
    },
    {
      question: 'How do I know the status of my ticket?',
      answer: 'You can check the status of your ticket by navigating to the "My Tickets" section and selecting the relevant ticket. The status will be displayed there.',
      showAnswer: false
    },
    {
      question: 'What is the process for escalating an issue?',
      answer: 'To escalate an issue, navigate to the "Escalate Ticket" section, select the ticket you wish to escalate, fill in the necessary details, and submit the escalation request.',
      showAnswer: false
    }
  ];

  toggleAnswer(index: number) {
    this.faqs[index].showAnswer = !this.faqs[index].showAnswer;
  }
  constructor() { }

  ngOnInit(): void {
  }

 
}
