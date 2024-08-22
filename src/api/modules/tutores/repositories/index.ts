import { BaseRepository } from '../../../@types/repository';
import type { TutorType } from '../entities/tutor.entity';
import { MemberData } from './defaultMongoDBRepository/tutorRepository';
export abstract class Repository<T> implements BaseRepository<T> {
	public abstract create(data: T): Promise<T | undefined> | T | undefined;
	public abstract list(): Promise<T[]> | T[];
	public abstract getByName(nome: string): Promise<T | undefined> | T | undefined;
	public abstract getByEmail(email: string): Promise<T | undefined> | T | undefined;
	public abstract deleteByName(nome: string): Promise<T | undefined> | T | undefined;
}

export type WithId<T> = { id: string } & T;

export type TutorRepository = Repository<TutorType> & { update: (nome: string, updatedData: MemberData) => Promise<TutorType | undefined> };
