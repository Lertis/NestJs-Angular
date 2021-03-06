import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from '../about/about.component';
declare const expect: jest.Expect;

describe('About component', () => {
	let component: AboutComponent;
	let fixture: ComponentFixture<AboutComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AboutComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AboutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
		expect(component).toMatchSnapshot();
	});
});
