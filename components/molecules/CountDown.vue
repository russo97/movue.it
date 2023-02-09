<template>
	<div class="flex justify-center items-center mt-8 lg:mt-14 text-9xl text-title font-rajdhani">
		<CountdownDigits :digits="minutes" />

		<span class="bg-background px-2">
			:
		</span>

		<CountdownDigits :digits="seconds" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import { mapState, mapGetters, mapMutations } from 'vuex';

import { Mutations } from '~/store/Countdown/types';

let TIMEOUT_REFERENCE: ReturnType<typeof setTimeout>;

export default Vue.extend({
	name: 'CountDown',

	computed: {
		...mapState('Countdown', [
			'time',
			'isActive',
		]),

		...mapGetters('Countdown', [
			'minutes',
			'seconds',
		]),
	},

	methods: {
		...mapMutations('Countdown', {
			setTime: Mutations.SET_TIME,
			resetTime: Mutations.RESET_TIME,
		}),

		runCountdown (flag: boolean): void {
			if (this.isActive && flag) {
				TIMEOUT_REFERENCE = setTimeout(() => {
					this.setTime(this.time - 1);
				}, 1000);

				return;
			}

			clearInterval(TIMEOUT_REFERENCE);
		},
	},

	watch: {
		isActive (newValue: boolean) {
			this.runCountdown(newValue);

			if (!newValue) {
				this.resetTime();
			}
		},

		time (newValue: number) {
			if (newValue > 0) {
				return (this as any).runCountdown(true);
			}

			this.$emit('completed');
		},
	},
});
</script>
