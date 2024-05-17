import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ManageTicketsServiceService } from '../manage-tickets/manage-tickets-service.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.scss']
})
export class ViewTicketComponent implements OnInit {
  submitted: boolean = false;
  formData: FormGroup;
  ticket: any;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private ticketService: ManageTicketsServiceService,
    private router: Router
  ) {

    this.formData = this.formBuilder.group({
      'Raised by': [''],
      'title': [''],
      'status': [''],
      'email': [''],
      'category': [''],
      'contact': [''],
      'comment': [''],
      'assignee':['']
    });
  }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   const ticketId = params['ticketId'];
    //   if (ticketId) {
    //     this.getTicketById(ticketId);
    //   }
    // });
    this.route.queryParams.subscribe(params => {
      const ticketCode = params['ticketCode'];  // Use ticketCode from query parameters
      if (ticketCode) {
        this.getTicketByCode(ticketCode);
      }
    });
  }

  getTicketByCode(ticketCode: any): void {
    this.ticketService.getCode(ticketCode).subscribe(
      (response) => {
        if (response && response.entity && response.entity.id) {
          this.ticket = response.entity;
          this.populateFormWithTicketData();
        } else {
          console.error('Invalid ticket data received:', response);
          // Handle invalid ticket data scenario (e.g., display error message)
        }
      },
      (error) => {
        console.error('Error fetching ticket:', error);
        // Handle error scenario (e.g., display error message)
      }
    );
  }




  populateFormWithTicketData(): void {
    this.formData.patchValue({
      'Raised by': this.ticket.postedBy,
      'title': this.ticket.title,
      'status': this.ticket.status,
      'email': this.ticket.email,
      'category': this.ticket.category,
      'contact': this.ticket.contact,
      'comment': this.ticket.description,
      'assignee': this.ticket.assignee
    });
  }


  // getTicketById(ticketId: any): void {
  //   this.ticketService.getById(ticketId).subscribe(
  //     (response) => {
  //       this.ticket = response;

  //       this.formData.patchValue({
  //         "Raised by": this.ticket.raisedBy,
  //         "title": this.ticket.title,
  //         "status": this.ticket.status,
  //         "email": this.ticket.email,
  //         "category": this.ticket.category,
  //         "contact": this.ticket.contact,
  //         "comment": this.ticket.comment,
  //         "assignee": this.ticket.assignee
  //       });

  //     },
  //     (error) => {
  //       console.error('Error fetching ticket:', error);

  //     }
  //   );
  // }

  onSubmit() {

  }

  goToDashboard(){
    this.router.navigate(['/system'])
  }
}
