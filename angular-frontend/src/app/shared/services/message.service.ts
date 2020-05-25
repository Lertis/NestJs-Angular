import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IToastMessage } from '../../models/entities';

@Injectable()
export class MessageToastService {

	constructor(private readonly messageService: MessageService) { }

	public addSingle(messageContainer: IToastMessage) {
		this.messageService.add({ severity: messageContainer.type, summary: messageContainer.summary, detail: messageContainer.detail });
	}

	public addMultiple(messages: IToastMessage[]) {
		this.messageService.addAll(messages);
	}

	public clear() {
		this.messageService.clear();
	}
}
