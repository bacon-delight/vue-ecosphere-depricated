<template lang="pug">
router-view
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "App",
});
</script>

<style lang="scss">
*,
*:before,
*:after {
	box-sizing: border-box;
	outline: none;
	font-weight: 300;
}

html,
body {
	border: 0;
	margin: 0;
	padding: 0;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
}
</style>
