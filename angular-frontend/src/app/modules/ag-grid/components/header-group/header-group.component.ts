import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CheckboxCommunicationService } from '../../services/checkbox.communication.service';

@Component({
	selector: 'app-header-group',
	templateUrl: './header-group.component.html',
	styleUrls: ['./header-group.component.scss'],
})
export class HeaderGroupComponent implements OnDestroy {
	selectedRowsSubscription$: Subscription;

	private params: any;
	private expandState: string;
	public selectedRows = 0;
	private totalRecords = 0;
	public colorToggle = 'primary';
	public $totalRows;

	constructor(private cbService: CheckboxCommunicationService) {
		this.selectedRowsSubscription$ = this.cbService.$selectedRows.subscribe((selectedRowCount) => {
			this.selectedRows = selectedRowCount;
		});
		this.$totalRows = this.cbService.$totalRows;
	}

	agInit(params): void {
		this.params = params;
		this.params.columnGroup
			.getOriginalColumnGroup()
			.addEventListener('expandedChanged', this.syncExpandButtons.bind(this));
		this.syncExpandButtons();
	}

	expandOrCollapse() {
		const currentState = this.params.columnGroup.getOriginalColumnGroup().isExpanded();
		this.params.setExpanded(!currentState);
	}

	syncExpandButtons() {
		if (this.params.columnGroup.getOriginalColumnGroup().isExpanded()) {
			this.expandState = 'expanded';
		} else {
			this.expandState = 'collapsed';
		}
	}

	ngOnDestroy() {
		this.selectedRowsSubscription$.unsubscribe();
	}
}
