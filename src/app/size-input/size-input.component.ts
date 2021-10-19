import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'kt-size-input',
  templateUrl: './size-input.component.html',
  styleUrls: ['./size-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SizeInputComponent,
      multi: true,
    },
  ]
})
export class SizeInputComponent implements OnInit, ControlValueAccessor {

  @ViewChild('sizeInput') private input!: ElementRef

  onChange: (obj:any) => void = () => {}
  onTouche: (obj:any) => void = () => {}
  disabled: boolean = false


  constructor() {
  }

  ngOnInit(): void {
    console.log(this.input)

  }


  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouche = fn
  }

  writeValue(obj: any): void {
    if (!this.input) return
    this.input.nativeElement.value = obj
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled
  }

}
