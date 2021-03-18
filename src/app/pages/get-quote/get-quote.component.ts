import { Component, OnInit } from "@angular/core";
import { GetQuoteService } from "src/app/shared/services/get-quote.service";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { EmailValidators } from "./email.validators";

@Component({
  selector: "app-get-quote",
  templateUrl: "./get-quote.component.html",
  styleUrls: ["./get-quote.component.css"]
})
export class GetQuoteComponent implements OnInit {
  form;
  clicked;
  status;
  response;
  data;
  constructor(
    fb: FormBuilder,
    private getQuoteService: GetQuoteService,
    private router: Router
  ) {
    this.form = fb.group({
      from: ["", [Validators.required, Validators.minLength(3)]],
      to: ["", [Validators.required, Validators.minLength(3)]],
      move: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, EmailValidators.cannotContainSpace]],
      phone: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          EmailValidators.cannotContainSpace
        ]
      ]
    });
  }

  ngOnInit() {}

  getQuote() {
    this.clicked = true;
    console.log(this.form.value);
    this.getQuoteService.getQuote(this.form.value).subscribe(
      data => {
        this.data = data;
        this.status = this.data.status;
        this.response = this.data.message;
        this.clicked = false;
      },
      (error: Response) => {
        console.log(error);
        this.clicked = false;
      }
    );
  }
  get from() {
    return this.form.get("from");
  }
  get to() {
    return this.form.get("to");
  }
  get move() {
    return this.form.get("move");
  }
  get phone() {
    return this.form.get("phone");
  }
  get email() {
    return this.form.get("email");
  }
}
