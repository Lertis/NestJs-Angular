import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NotFoundComponent } from '../not-found/not-found.component';
import {} from 'jest';

describe('[Component]: NotFoundComponent', () => {
	let component: NotFoundComponent;
	let fixture: ComponentFixture<NotFoundComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NotFoundComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NotFoundComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('component should be created', () => {
		expect(component).toBeTruthy();
		expect(component).toMatchSnapshot();
	});
});
