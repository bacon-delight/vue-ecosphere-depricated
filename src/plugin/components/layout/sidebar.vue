<template lang="pug">
.sidebar Sidebar
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
	width: $spacer-8;
}
</style>
