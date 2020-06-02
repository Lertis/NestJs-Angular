import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-confirmation-pop-up',
	templateUrl: './confirmation-pop-up.component.html',
	styleUrls: ['./confirmation-pop-up.component.scss'],
})
export class ConfirmationPopUpComponent {
	public config = {
		text: '',
	};

	constructor(private readonly dialogRef: MatDialogRef<ConfirmationPopUpComponent>) {}

	public confirmYes() {
		this.dialogRef.close(true);
	}

	public confirmNo() {
		this.dialogRef.close(false);
	}
}
