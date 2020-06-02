import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ConfirmationPopUpComponent } from '../confirmation-pop-up/confirmation-pop-up.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../modules/material/material.module';
import { of } from 'rxjs';

class MatDialogRefMock {
	close() {
		return false;
	}
}

describe('[Component]: ConfirmationPopUpComponent', () => {
	let component: ConfirmationPopUpComponent;
	let fixture: ComponentFixture<ConfirmationPopUpComponent>;
	let dialog: MatDialogRef<ConfirmationPopUpComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [MaterialModule],
			declarations: [ConfirmationPopUpComponent],
			providers: [
				{
					provide: MatDialogRef,
					useClass: MatDialogRefMock,
				},
			],
		}).compileComponents();
		dialog = TestBed.inject(MatDialogRef);
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ConfirmationPopUpComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('component should be created', () => {
		expect(component).toBeTruthy();
	});

	it('[Method: confirmYes] material dialog should return true', () => {
		const spy = spyOn(dialog, 'close').and.returnValue(true);
		component.confirmYes();
		expect(spy).toHaveBeenCalled();
	});

	it('[Method: confirmYes] material dialog should return false', () => {
		const spy = spyOn(dialog, 'close').and.returnValue(false);
		component.confirmNo();
		expect(spy).toHaveBeenCalled();
	});
});
