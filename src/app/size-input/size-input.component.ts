import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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

  @ViewChild('input') private input!: ElementRef

  onChange: (obj:any) => void = () => {}
  onTouche: (obj:any) => void = () => {}
  disabled: boolean = false
  constructor() {
  }
  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouche = fn
  }

  writeValue(obj: any): void {
    if (!this.input) return
    console.log(obj)
    this.input.nativeElement.value = obj
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled
  }

}
