export interface IRequestContainer {
	method: RequestTypes;
	body: {
		username: string;
		password: string;
		userName?: string;
	};
	url: string;
}

export type User = {
	userId: number;
	username: string;
	password: string;
};

export enum RequestTypes {
	LOGIN = 'LOGIN',
	REG = 'REG',
}
