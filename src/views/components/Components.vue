<template lang="pug">
.layout
	v-eco-layout
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Components",
	inject: ["ecosphere"],
	mounted() {
		console.log(this.ecosphere);
	},
});
</script>

<style lang="scss" scoped>
.layout {
	height: 100vh;
	width: 100vw;
}
</style>
