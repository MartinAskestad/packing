import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import * as pack from 'bin-pack';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

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
  form: FormGroup;
  viewBox$ = this.viewBoxSubject.asObservable();
  packedResult$: Observable<any>;

  constructor() {
    this.form = new FormGroup({
      bins: new FormArray([])
    });

    this.packedResult$ = this.form.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      map(values => {
        const result = pack(values.bins);
        this.viewBoxSubject.next(`0 0 ${result.width} ${result.height}`);
        return result.items;
      })
    );
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
