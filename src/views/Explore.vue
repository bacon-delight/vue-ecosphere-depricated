<template lang="pug">
v-eco-layout.layout(:navbarOptions="navbarOptions")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
	name: "Explore",
	computed: {
		...mapGetters({
			navbarOptions: "navigation",
		}),
	},
});
</script>

<style lang="scss" scoped>
.layout {
	height: 100vh;
	width: 100vw;
	overflow: hidden;
}
</style>
