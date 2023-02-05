<template>
	<div>
		<figure class="mr-6 w-20 h-20 rounded-full overflow-hidden">
			<img
				src="https://github.com/russo97.png"
				alt="GitHub profile pic"
			/>
		</figure>

		<div class="flex flex-col w-full">
			<strong class="text-title text-2xl">
				Wanderson Silva
			</strong>

			<p class="flex items-center">
				<img
					src="icons/level.svg"
					alt="level icon"
					class="mr-2"
				/>

				<span class="text-base">
					Level {{ level }}
				</span>
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import { mapState } from 'vuex';

export default Vue.extend({
	name: 'Profile',

	computed: mapState('Challenges', ['level']),
});
</script>
