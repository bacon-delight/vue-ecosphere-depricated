<template lang="pug">
div Plugin Component Mounted Successfully
div {{ message }}
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
	name: "Test",
	props: {
		message: {
			type: String as PropType<string>,
			default: "",
		},
	},
});
</script>
