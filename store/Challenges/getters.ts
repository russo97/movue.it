
import { Getters } from './types';

export default {
	challengesLength: state => state.allChallenges.length,

	currentChallenge: (state) => {
		const { allChallenges, currentChallengeIndex } = state;

		return typeof currentChallengeIndex === 'number'
			? allChallenges[currentChallengeIndex]
			: null;
	},

	currentXPPercentage: (state) => {
		const { current, end } = state.xp;

		const percentage = current / end * 100;

		return Number(percentage.toFixed(2));
	},
} as Getters;
