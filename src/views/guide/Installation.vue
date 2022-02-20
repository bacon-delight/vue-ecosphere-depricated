<template lang="pug">
.wrapper
	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Installation",
	computed: {
		content() {
			return this.$t("modules.guide.installation");
		},
	},
});
</script>

<style lang="scss" scoped></style>
