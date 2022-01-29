<template lang="pug">
.sidebar sidebar
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Sidebar",
});
</script>

<style lang="scss" scoped>
.sidebar {
	background: $color-background;
	min-width: $spacer-7;
	max-width: $spacer-10;
	overflow-y: auto;
}
</style>
