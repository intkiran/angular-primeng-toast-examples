import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng';

@Component({
  selector: 'app-basic-toast',
  templateUrl: './basic-toast.component.html',
  styleUrls: ['./basic-toast.component.css']
})
export class BasicToastComponent implements OnInit {

      constructor(private messageService: MessageService) {}
    showMessage() {
        this.messageService.add({severity:'info', summary: 'Record is added successully', detail:'record added'});
    }
  ngOnInit() {
  }

}