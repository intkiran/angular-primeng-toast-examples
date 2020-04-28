import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng";

@Component({
  selector: "app-toast-html",
  templateUrl: "./toast-html.component.html",
  styleUrls: ["./toast-html.component.css"]
})
export class ToastHtmlComponent implements OnInit {
  htmlContent: string = "";

  showHtmlContent(descreption) {
    this.htmlContent = "<h1>Heading 1<h1>\n<h2>Heading 2<h2>";
    this.messageService.add({
      severity: "info",
      summary: "Summary content",
      detail: ""
    });
  }

  constructor(private messageService: MessageService) {}

  ngOnInit() {}
}
