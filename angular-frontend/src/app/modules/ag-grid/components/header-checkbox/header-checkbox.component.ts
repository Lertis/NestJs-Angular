import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GridOptions } from '@ag-grid-community/all-modules';
import { CheckboxCommunicationService } from '../../services/checkbox.communication.service';

@Component({
	selector: 'app-header-checkbox',
	templateUrl: './header-checkbox.component.html',
	styleUrls: ['./header-checkbox.component.scss'],
})
export class HeaderCheckboxComponent implements OnDestroy {
	changeSelectAllCheckBoxSubscription$: Subscription;

	public params: any;
	private gridOptions: GridOptions;
	private deselectAll = false;
	public checked = false;

	constructor(private cbService: CheckboxCommunicationService) {
		this.changeSelectAllCheckBoxSubscription$ = this.cbService.$changeSelectAllCheckBox.subscribe((flag) => {
			this.checked = flag;
		});
	}

	agInit(params): void {
		this.gridOptions = this.cbService.getGridOptions();
		this.params = params;
		this.checked = this.gridOptions.api.getSelectedRows().length === this.gridOptions.api.getDisplayedRowCount();
	}

	onMainCheckBoxClick(event) {
		if (this.checked) {
			this.gridOptions.api.selectAll();
		} else {
			this.gridOptions.api.deselectAll();
		}
		this.cbService.$selectionObservable.next(this.deselectAll);
	}

	checkboxClick(event) {
		this.deselectAll = event.target.checked;
		this.checked = !this.checked;
	}

	public getParams() {
		return this.params;
	}

	// for test purpose
	public setParams(params: any) {
		this.params = params;
	}

	ngOnDestroy() {
		this.changeSelectAllCheckBoxSubscription$.unsubscribe();
	}
}
