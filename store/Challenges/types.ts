
import { MutationTree } from 'vuex';

export interface XP {
	current: number;
	start: number;
	end: number;
}

export interface Challenge {
	type: string;
	description: string;
	amount: number;
}

export interface Cookie {
	xp: XP;
	level: number;
	completedChallenges: number;
}

export interface State {
	level: number;
	xp: XP;
	completedChallenges: number;
	currentChallengeIndex: number | null;
	isLevelUpModalOpen: boolean;
	allChallenges: Challenge[];
}

export interface Getters {
	challengesLength: (state: State) => number;
	currentXPPercentage: (state: State) => number;
	currentChallenge: (state: State) => Challenge | null;
}

export enum Mutations {
	SET_CURRENT_CHALLENGE_INDEX = 'SET_CURRENT_CHALLENGE_INDEX',
	SET_IS_LEVEL_UP_MODAL_OPEN = 'SET_IS_LEVEL_UP_MODAL_OPEN',
	COMPLETE_CHALLENGE = 'COMPLETE_CHALLENGE',
	SAVE_COOKIE_DATA = 'COMPLETE_CHALLENGE',
}

export type RootState = ReturnType<() => State>;

export interface MutationInterface extends MutationTree<RootState> {
	[Mutations.SET_CURRENT_CHALLENGE_INDEX](state: State, payload: number): void;
	[Mutations.SET_IS_LEVEL_UP_MODAL_OPEN](state: State, payload: boolean): void;
	[Mutations.COMPLETE_CHALLENGE](state: State, payload: boolean): void;
	[Mutations.SAVE_COOKIE_DATA](state: State, payload: Cookie): void;
}
