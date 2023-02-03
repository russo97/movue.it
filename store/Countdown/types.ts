// eslint-disable-next-line import/named
import { MutationTree } from 'vuex';

export interface State {
	time: number;
	isActive: boolean;
	hasCompleted: boolean;
}

export interface Getters {
	minutes: (state: State) => number;
	seconds: (state: State) => number;
}

export enum Mutations {
	SET_TIME = 'SET_TIME',
	RESET_TIME = 'RESET_TIME',
	SET_IS_ACTIVE = 'SET_IS_ACTIVE',
	SET_HAS_COMPLETED = 'SET_HAS_COMPLETED'
}

export type RootState = ReturnType<() => State>

export interface MutationInterface extends MutationTree<RootState> {
	[Mutations.SET_TIME](state: State, payload: number): void;
	[Mutations.RESET_TIME](state: State): void;
	[Mutations.SET_IS_ACTIVE](state: State, payload: boolean): void;
	[Mutations.SET_HAS_COMPLETED](state: State, payload: boolean): void;
}
