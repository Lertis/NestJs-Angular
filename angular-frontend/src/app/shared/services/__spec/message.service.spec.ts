import { async, TestBed, inject } from '@angular/core/testing';
import { MessageToastService } from '../message.service';
import { MessageService } from 'primeng/api';
import { MESSAGE_PRIMENG_API, MESSAGE_PRIMENG_API_COLLECTION } from './message.service.set';

describe('[Service]: Message Toast', () => {
	let message: MessageToastService;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [],
			declarations: [],
			providers: [MessageToastService, MessageService],
		});
		message = TestBed.inject(MessageToastService);
	}));

	it('should be created', inject([MessageService], (ms: MessageService) => {
		expect(message).toBeTruthy();
		expect(ms).toBeTruthy();
	}));

	it('[Method: clear]: should clear functon from primeNg API', inject([MessageService], (ms: MessageService) => {
		const spy = jest.spyOn(ms, 'clear').mockReturnValue();
		message.clear();
		expect(spy).toHaveBeenCalled();
	}));

	it('[Method: addSingle]: should create a single message', inject([MessageService], (ms: MessageService) => {
		const spy = jest.spyOn(ms, 'add').mockReturnValue();
		message.addSingle(MESSAGE_PRIMENG_API);
		expect(spy).toHaveBeenCalled();
	}));

	it('[Method: addMultiple]: should create multiple  messages', inject([MessageService], (ms: MessageService) => {
		const spy = jest.spyOn(ms, 'addAll').mockReturnValue();
		message.addMultiple(MESSAGE_PRIMENG_API_COLLECTION);
		expect(spy).toHaveBeenCalled();
	}));
});
