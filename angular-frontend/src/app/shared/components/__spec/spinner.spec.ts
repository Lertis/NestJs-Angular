import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { SpinnerComponent } from '../spinner/spinner.component';
import { MaterialModule } from '../../../modules/material/material.module';

describe('[Component]: SpinnerComponent', () => {
	let component: SpinnerComponent;
	let fixture: ComponentFixture<SpinnerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [MaterialModule],
			declarations: [SpinnerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SpinnerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('component should be created', () => {
		expect(component).toBeTruthy();
		expect(component).toMatchSnapshot();
	});
});
