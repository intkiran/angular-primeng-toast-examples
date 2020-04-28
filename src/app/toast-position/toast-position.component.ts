import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng';

@Component({
  selector: 'app-toast-position',
  templateUrl: './toast-position.component.html',
  styleUrls: ['./toast-position.component.css']
})
export class ToastPositionComponent implements OnInit {

       constructor(private messageService: MessageService) {}
    showError() {
        this.messageService.add({severity:'error', summary: 'Server error', detail:'500 error'});
    }
  ngOnInit() {
  }
}