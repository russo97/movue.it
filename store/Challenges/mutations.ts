
import { Mutations, MutationInterface } from './types';

export default {
	[Mutations.SET_CURRENT_CHALLENGE_INDEX] (state, payload) {
		state.currentChallengeIndex = payload;
	},

	[Mutations.SET_IS_LEVEL_UP_MODAL_OPEN] (state, payload) {
		state.isLevelUpModalOpen = payload;
	},

	[Mutations.COMPLETE_CHALLENGE] (state, payload) {
		state.completedChallenges += 1;

		const { current, end } = state.xp;

		const currentTotalXP = current + payload;

		const shouldLevelUp = currentTotalXP >= end;

		if (shouldLevelUp) {
			state.level += 1;

			const remainingXP = currentTotalXP - end;
			const experienceToNextLevel = ((state.level + 1) * 4) ** 2;

			state.xp = {
				start: 0,
				current: remainingXP,
				end: experienceToNextLevel,
			};

			state.isLevelUpModalOpen = true;

			return;
		}

		state.xp = {
			...state.xp,
			current: currentTotalXP,
		};
	},

	[Mutations.SAVE_COOKIE_DATA] (state, { level, xp, completedChallenges }) {
		Object.assign(state, {
			xp,
			level,
			completedChallenges,
		});
	},
} as MutationInterface;
