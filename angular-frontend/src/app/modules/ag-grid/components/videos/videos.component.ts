import { Component, OnInit } from '@angular/core';
import { GridOptions } from '@ag-grid-community/all-modules';
import { Subject, Observable } from 'rxjs';
import { AllModules } from '@ag-grid-enterprise/all-modules';
import { CheckboxCommunicationService } from '../../services/checkbox.communication.service';
import { FetchService } from '../../services/fetch.service';
import { HeaderGroupComponent } from '../header-group/header-group.component';
import { HeaderCheckboxComponent } from '../header-checkbox/header-checkbox.component';
import { RowCheckboxComponent } from '../row-checkbox/row-checkbox.component';
import { Item } from '../../models/item.model';

@Component({
	selector: 'app-videos',
	templateUrl: './videos.component.html',
	styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
	public gridOptions: GridOptions;
	private latestSelectedNode = new Subject<any>();
	public getContextMenuItems;
	public rowData: Observable<Item[]>;
	public rowHeight = 90;
	private totalCountOfRecords = 0;
	private rowSelection = 'multiple';
	private colorToggle = 'primary';
	private checkedToogle = false;
	private selectedRecordsCount;
	public frameworkComponents;
	public popupParent: HTMLBodyElement;

	modules = AllModules;

	constructor(private cbService: CheckboxCommunicationService, private dService: FetchService) {
		this.rowData = this.dService.getAPIData();
		this.rowData.subscribe((list: Array<any>) => {
			this.cbService.$totalRows.next(list.length);
		});
		this.frameworkComponents = {
			customHeaderGroupComponent: HeaderGroupComponent,
			agColumnHeader: HeaderCheckboxComponent,
		};
		this.popupParent = document.querySelector('body');

		this.getContextMenuItems = (params) => {
			const result = [];
			const link = this.getVideoTitleLink(params.node.data, 'Open in new tab');
			if (params.column.userProvidedColDef.headerName === 'Video Title') {
				result.push({
					name: link,
					cssClasses: ['redFont', 'bold'],
					icon: '<i class="fas fa-external-link-alt"></i>',
				});
			}
			return result;
		};
	}

	ngOnInit() {
		this.gridOptions = {
			columnDefs: this.getColumnsDef(),
			defaultColDef: this.getDefaultColDef(),
			rowSelection: this.rowSelection,
		} as GridOptions;
		this.gridOptions.defaultColDef.sortable = true;
		this.gridOptions.defaultColDef.filter = true;
		this.gridOptions.defaultColDef.rowDrag = true;
		this.cbService.setGridOptions(this.gridOptions);
	}

	getColumnsDef() {
		return [
			{
				headerName: '',
				headerGroupComponent: 'customHeaderGroupComponent',
				children: [
					{
						headerName: '',
						headerGroupComponent: 'Checkbox toogle',
						field: 'checkbox',
						width: 50,
						headerComponentParams: { menuIcon: 'fa-external-link-alt' },
						cellRendererFramework: RowCheckboxComponent as new () => RowCheckboxComponent,
						columnGroupShow: 'open',
						sortable: true,
					},
					{
						headerName: '',
						field: 'thumbnails',
						width: 100,
						cellRenderer: (data) => this.getCellRendererThumbnails(data.data),
						sortable: true,
					},
					{
						headerName: 'Published on',
						valueGetter: 'data.snippet.publishedAt',
						width: 200,
						sortable: true,
					},
					{
						headerName: 'Video Title',
						valueGetter: 'data.snippet.title',
						width: 400,
						sortable: true,
						cellRenderer: (data) => this.getVideoTitleLink(data.data, data.data.snippet.title),
					},
					{
						headerName: 'Description',
						valueGetter: 'data.snippet.description',
						width: 1000,
						sortable: true,
					},
				],
			},
		];
	}

	getCellRendererThumbnails(data: Item) {
		return `<img
    style="width: ${data.snippet.thumbnails.default.width * 2};
    height: ${data.snippet.thumbnails.default.height}"
    src="${data.snippet.thumbnails.default.url}">`;
	}

	getVideoTitleLink(data: Item, title) {
		return `<a href="https://www.youtube.com/watch?v=${data.id.videoId}" target="_blank">${title}</a>`;
	}

	getDefaultColDef() {
		return {
			width: 100,
			headerComponentParams: { menuIcon: 'fa-bars' },
			sortable: true,
			resizable: true,
			filter: true,
		};
	}

	onSelectionChanged(event) {
		const rowCount = event.api.getSelectedNodes().length;
		this.cbService.$selectedRows.next(rowCount);
	}

	onRowClicked(event: any) {
		this.latestSelectedNode.next(event.node);
	}

	toggle(event) {
		if (event.checked) {
			this.gridOptions.columnApi.setColumnVisible('checkbox', true);
		} else {
			this.gridOptions.columnApi.setColumnVisible('checkbox', false);
		}
	}

	onGridReady() {
		this.gridOptions.onSelectionChanged = () => {
			this.selectedRecordsCount = this.gridOptions.api.getSelectedRows().length;
		};
	}
}
