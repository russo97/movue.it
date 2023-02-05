<template>
	<div>
		hello, world
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

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
});
</script>
