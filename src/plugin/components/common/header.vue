<template lang="pug">
h1.header.header--1(
	v-if="type === 1",
	:class="{ 'header--no-margin': !margin }"
)
	VEcoText(:label="label")
h2.header.header--2(
	v-if="type === 2",
	:class="{ 'header--no-margin': !margin }"
)
	VEcoText(:label="label")
h3.header.header--3(
	v-if="type === 3",
	:class="{ 'header--no-margin': !margin }"
)
	VEcoText(:label="label")
h4.header.header--4(
	v-if="type === 4",
	:class="{ 'header--no-margin': !margin }"
)
	VEcoText(:label="label")
h5.header.header--5(
	v-if="type === 5",
	:class="{ 'header--no-margin': !margin }"
)
	VEcoText(:label="label")
h6.header.header--6(
	v-if="type === 6",
	:class="{ 'header--no-margin': !margin }"
)
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
			required: true,
		},
		type: {
			type: Number as PropType<number>,
			required: true,
		},
		margin: {
			type: Boolean as PropType<boolean>,
			default: true,
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

	&--no-margin {
		margin: 0;
	}
}

.text {
	width: 100%;
}

span {
	width: 100%;
}
</style>
