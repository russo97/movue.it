
import {
	State,
	Getters,
	Mutations,
	MutationInterface,
} from './types';

const MINUTES = 25;
const SECONDS_PER_MINUTE = 60;

export const state = (): State => ({
	time: MINUTES * SECONDS_PER_MINUTE,
	isActive: false,
	hasCompleted: false,
});

export const getters: Getters = {
	minutes: state => Math.floor(state.time / SECONDS_PER_MINUTE),
	seconds: state => state.time % SECONDS_PER_MINUTE,
};

export const mutations: MutationInterface = {
	[Mutations.SET_TIME] (state, payload) {
		state.time = payload;
	},

	[Mutations.RESET_TIME] (state) {
		state.time = MINUTES * SECONDS_PER_MINUTE;
	},

	[Mutations.SET_IS_ACTIVE] (state, payload) {
		state.isActive = payload;
	},

	[Mutations.SET_HAS_COMPLETED] (state, payload) {
		state.hasCompleted = payload;
	},
};
