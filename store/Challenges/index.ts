
import allChallenges from '~/assets/challenges/data';

import { State, XP } from './types';

const DEFAULT_XP: XP = {
	current: 0,
	start: 0,
	end: 64,
};

export const state = (): State => ({
	level: 1,
	allChallenges,
	xp: DEFAULT_XP,
	completedChallenges: 0,
	isLevelUpModalOpen: false,
	currentChallengeIndex: null,
});
