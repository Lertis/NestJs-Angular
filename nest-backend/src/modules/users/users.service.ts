import { Injectable } from '@nestjs/common';

export type User = {
	userId: number;
	username: string;
	password: string;
};

@Injectable()
export class UsersService {
	private readonly users: User[] = [];

	constructor() {
		this.users = [
			{
				userId: 1,
				username: 'admin',
				password: 'admin',
			},
			{
				userId: 2,
				username: 'user',
				password: 'user',
			},
		];
	}

	async findOne(username: string): Promise<User | undefined> {
		return this.users.find((user) => user.username === username);
	}
}
