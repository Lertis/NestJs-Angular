import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CheckboxCommunicationService } from '../../services/checkbox.communication.service';

@Component({
	selector: 'app-row-checkbox',
	templateUrl: './row-checkbox.component.html',
	styleUrls: ['./row-checkbox.component.scss'],
})
export class RowCheckboxComponent implements OnDestroy {
	selectionSubscription$: Subscription;

	private params: any;

	public checked = false;

	constructor(private cbService: CheckboxCommunicationService) {
		this.selectionSubscription$ = this.cbService.$selectionObservable.subscribe((flag) => {
			this.params.node.setSelected(flag);
			this.checked = flag;
		});
	}

	agInit(params: any): void {
		this.params = params;
		this.checked = this.params.node.isSelected();
	}

	clicked(event) {
		const checked = event.target.checked;
		this.checked = checked;
		this.params.node.setSelected(checked);
		if (!checked) {
			this.cbService.$changeSelectAllCheckBox.next(checked);
		} else {
			if (this.params.api.getSelectedNodes().length === this.params.api.getDisplayedRowCount()) {
				this.cbService.$changeSelectAllCheckBox.next(true);
			}
		}
	}

	public setParams(params: any) {
		this.params = params;
	}

	ngOnDestroy() {
		this.selectionSubscription$.unsubscribe();
	}
}
