<template lang="pug">
.layout
	v-eco-layout(
		:navigation="navigation",
		:sidebar="sidebar",
		logo="/img/logo.png"
	)
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
	name: "Components",
	computed: {
		...mapGetters(["navigation", "sidebar"]),
	},
});
</script>

<style lang="scss" scoped>
.layout {
	height: 100vh;
	width: 100vw;
}
</style>
