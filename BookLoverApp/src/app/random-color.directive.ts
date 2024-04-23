import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRandomColor]'
})
export class RandomColorDirective {
  ngOnInit(): void {
   }
   
  constructor(private el: ElementRef, private renderer: Renderer2) {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.renderer.setStyle(this.el.nativeElement, 'color', randomColor);
   }

}
