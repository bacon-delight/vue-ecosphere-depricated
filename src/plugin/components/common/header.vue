<template lang="pug">
h1.header--1(v-if="type === 1")
	VEcoText(:label="label")
h2.header--2(v-if="type === 2")
	VEcoText(:label="label")
h3.header--3(v-if="type === 3")
	VEcoText(:label="label")
h4.header--4(v-if="type === 4")
	VEcoText(:label="label")
h5.header--5(v-if="type === 5")
	VEcoText(:label="label")
h6.header--6(v-if="type === 6")
	VEcoText(:label="label")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import VEcoText from "@/plugin/components/common/text.vue";

export default defineComponent({
	name: "Header",
	props: {
		label: {
			type: String as PropType<string>,
			default: "",
		},
		type: {
			type: Number as PropType<number>,
			required: true,
		},
	},
	components: {
		VEcoText,
	},
});
</script>

<style lang="scss" scoped>
.header {
	&--1 {
		@include header-1;
	}
	&--2 {
		@include header-2;
	}
	&--3 {
		@include header-3;
	}
	&--4 {
		@include header-4;
	}
	&--5 {
		@include header-5;
	}
	&--6 {
		@include header-6;
	}
}
</style>
