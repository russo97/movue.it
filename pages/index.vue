<template>
	<section
		class="flex flex-col lg:flex-row flex-1 lg:flex-none lg:mt-16 sm:gap-x-10 md:gap-x-20"
	>
		<div class="flex flex-col w-full lg:w-1/2">
			<Profile />

			<CompletedChallenges />

			<CountDown @completed="getNewChallenge" />

			<button
				v-if="hasCountdownCompleted"
				disabled
				class="button completed"
			>
				Cycle completed
			</button>

			<button
				v-else-if="isCountdownActive"
				class="button abandon"
				@click="setCountdownState(false)"
			>
				Abandon cycle
			</button>

			<button
				v-else
				class="button start"
				@click="setCountdownState(true)"
			>
				Start a cycle
			</button>
		</div>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';

import { mapState, mapMutations } from 'vuex';

import { Mutations as CountdownMutations } from '~/store/Countdown/types';

interface Head {
	title: string;
}

export default Vue.extend({
	name: 'Home',

	head (): Head {
		return {
			title: 'Home | Movue.it',
		};
	},

	mounted () {
		if ('Notification' in window) {
			Notification.requestPermission();
		}
	},

	computed: {
		...mapState('Countdown', {
			isCountdownActive: 'isActive',
			hasCountdownCompleted: 'hasCompleted',
		}),
	},

	methods: {
		...mapMutations({
			setCountdownIsActive: `Countdown/${CountdownMutations.SET_IS_ACTIVE}`,
			setCountDownHasCompleted: `Countdown/${CountdownMutations.SET_HAS_COMPLETED}`,
		}),

		setCountdownState (flag: boolean) {
			this.setCountDownHasCompleted(false);
			this.setCountdownIsActive(flag);
		},

		getNewChallenge () {
			this.setCountDownHasCompleted(true);
		},
	},
});
</script>
