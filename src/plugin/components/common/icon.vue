<template lang="pug">
i(:class="[type]")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
	name: "Icon",
	props: {
		type: {
			type: String as PropType<string>,
			required: true,
		},
	},
});
</script>

<style lang="scss" scoped>
@import url("https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css");

i {
	font-size: $base-rem;
}
</style>
