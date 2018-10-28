import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import * as pack from 'bin-pack';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private viewBoxSubject = new BehaviorSubject<string>('0 0 0 0');
  private colors = [
    'black',
    'silver',
    'gray',
    'white',
    'maroon',
    'red',
    'purple',
    'fuchsia',
    'green',
    'lime',
    'olive',
    'yellow',
    'navy',
    'blue',
    'teal',
    'aqua'
  ];
  packedResult: any;
  form: FormGroup;
  viewBox$ = this.viewBoxSubject.asObservable();

  get viewBox(): string {
    if (this.packedResult) {
      return `0 0 ${this.packedResult.width} ${this.packedResult.height}`;
    }
    return '0 0 100 100';
  }

  constructor() {
    this.form = new FormGroup({
      bins: new FormArray([])
    });

    this.form.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(values => {
        const size = pack(values.bins, { inPlace: true });
        this.viewBoxSubject.next(`0 0 ${size.width} ${size.height}`);
        this.form.patchValue(values, { emitEvent: false });
      });
  }

  addBin() {
    const arr = <FormArray>this.form.get('bins');
    arr.push(
      new FormGroup({
        width: new FormControl(100, Validators.required),
        height: new FormControl(100, Validators.required),
        color: new FormControl(this.colors[arr.length]),
        x: new FormControl(),
        y: new FormControl()
      })
    );
  }

  removeBin(idx: number) {
    (<FormArray>this.form.get('bins')).removeAt(idx);
  }
}
