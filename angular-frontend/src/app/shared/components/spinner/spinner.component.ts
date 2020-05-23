import { Component, Input } from '@angular/core';
import { CommonColors, SpinnerTypes } from '../../../models/entities';

@Component({
	selector: 'app-spinner',
	templateUrl: './spinner.component.html',
	styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
	@Input() public color: CommonColors;
	@Input() public mode: SpinnerTypes;
	@Input() public value: number;
}
