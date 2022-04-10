<template lang="pug">
.table
	//- Headers
	.table__row.table__row--header
		.table__cell(
			v-for="cell in columns",
			:style="{ ...defaultCSS, ...cell.css }"
		)
			span.table__header {{ cell.label }}

	//- Body
	.table__row(
		v-for="observation in observations",
		:class="{ 'table__row--divider': dividers }"
	)
		.table__cell(
			v-for="cell in columns",
			:style="{ ...defaultCSS, ...cell.css }"
		)
			VEcoLink(
				v-if="cell.type === 'email'",
				:label="observation[cell.key]",
				:href="`mailto:${observation[cell.key]}`"
			)
			VEcoLink(
				v-else-if="cell.type === 'link'",
				:label="observation[cell.key]",
				:href="observation[cell.key]",
				target="_blank"
			)
			VEcoLink(
				v-else-if="cell.type === 'phone'",
				:label="observation[cell.key]",
				:href="`tel:${observation[cell.key]}`"
			)
			span(v-else) {{ observation[cell.key] }}
</template>

<script lang="ts">
import {
	unknown_nested_type,
	table_column,
} from "@/plugin/utils/types.interface";
import { defineComponent, PropType } from "vue";
import VEcoLink from "@/plugin/components/action/link.vue";

export default defineComponent({
	name: "Table",
	props: {
		observations: {
			type: Array,
			required: true,
		},
		headers: {
			type: Array as PropType<table_column[]>,
			default: () => [],
		},
		dividers: {
			type: Boolean as PropType<boolean>,
			default: true,
		},
	},
	data() {
		return {
			columns: [] as table_column[],
			rows: [] as unknown_nested_type[],
			defaultCSS: {
				width: "150px",
			},
		};
	},
	mounted() {
		if (!this.headers.length) {
			this.detectHeaders();
		} else {
			this.columns = this.headers;
		}
		this.rows = this.observations;
	},
	methods: {
		detectHeaders() {
			this.columns = [];
			const keys: string[] = [];
			this.observations
				.slice(0, 100)
				.forEach((observation: unknown_nested_type) => {
					for (const key in observation) {
						if (!keys.includes(key)) {
							keys.push(key);
						}
					}
				});
			keys.forEach((key: string) => {
				this.columns.push({
					label: key,
					key,
					css: {
						width: "100px",
					},
				});
			});
		},
	},
	components: {
		VEcoLink,
	},
});
</script>

<style lang="scss" scoped>
.table {
	display: block;
	width: 100%;
	overflow-x: auto;
	@include horizontal-scroll;

	&__row {
		min-width: 100%;
		width: fit-content;
		display: flex;
		column-gap: $spacer-0-5;
		padding: $spacer-0-25 $spacer-0-5;
		transition: all $transition-micro ease-in-out;

		&--header {
			background: $color-background;
			border-radius: $border-radius-standard;
		}

		&--divider {
			border-bottom: 1px solid rgba($color-helper-grey, 0.5);
		}

		&:hover {
			background: $color-background;
		}
	}

	&__cell {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	&__header {
		@include font-emphasis;
		margin: 0;
	}
}
</style>
