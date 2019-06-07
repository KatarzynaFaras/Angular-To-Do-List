import {
  Directive,
  HostListener,
  Input,
  ElementRef,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[appDate]"
})
export class DateDirective {
  @Input()
  private date: string;
  private paragraph;
  private hasChild;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement("span");
    this.hasChild = false;
  }

  @HostListener("click")
  click(eventDate: Event) {
    setTimeout(() => {
      if (!this.hasChild) {
        this.paragraph.innerHTML = " Date:  " + this.date;
        this.renderer.appendChild(this.el.nativeElement, this.paragraph);
        this.hasChild = true;
      } else {
        this.renderer.removeChild(this.el.nativeElement, this.paragraph);
        this.hasChild = false;
      }
    }, 100);
  }
}
