<template lang="pug">
v-eco-header(:label="$t('headers.explore')", :type="5")
.components
	//- Button
	.components__item(
		@click="$ecosphere.handlers.navigate('/components/action/button')"
	)
		.components__showcase
			v-eco-button(
				:label="`${$t('keywords.home')} :ri-home-line:`",
				theme="hue"
			)
		.components__description {{ $t("headers.button") }}

	//- Toggle
	.components__item(
		@click="$ecosphere.handlers.navigate('/components/action/toggle')"
	)
		.components__showcase
			v-eco-toggle(
				:options="[ { label: ':ri-home-line:', value: 'home' }, { label: ':ri-tools-line:', value: 'tools' }, { label: ':ri-settings-line:', value: 'settings' }, ]",
				theme="invert",
				hue="hue",
				:defaultIndex="0"
			)
		.components__description {{ $t("headers.toggle") }}

	//- Link
	.components__item(
		@click="$ecosphere.handlers.navigate('/components/action/link')"
	)
		.components__showcase
			v-eco-link(label="Visit :ri-arrow-right-up-line:")
		.components__description {{ $t("headers.link") }}

	//- Header
	.components__item(@click="$ecosphere.handlers.navigate('/design/typography')")
		.components__showcase
			v-eco-header(
				label=":ri-font-size: :ri-translate-2:",
				:type="3",
				:margin="false"
			)
		.components__description {{ $t("headers.typography") }}

	//- Colours
	.components__item(@click="$ecosphere.handlers.navigate('/design/colours')")
		.components__showcase.components__showcase--flex
			v-eco-dot(hue="hue", size="large")
			v-eco-dot(hue="warning", size="medium")
			v-eco-dot(hue="critical", size="small")
			v-eco-dot(hue="success", size="tiny")
		.components__description {{ $t("headers.colours") }}

	//- Icons
	.components__item(
		@click="$ecosphere.handlers.navigate('/components/common/icon')"
	)
		.components__showcase.components__showcase--flex
			v-eco-icon(type="ri-sun-line")
			v-eco-icon(type="ri-moon-line")
			v-eco-icon(type="ri-alarm-line")
			v-eco-icon(type="ri-heart-line")
		.components__description {{ $t("headers.icon") }}

	//- Menu
	.components__item(
		@click="$ecosphere.handlers.navigate('/components/action/menu')"
	)
		.components__showcase
			v-eco-menu(
				:options="[{ label: 'Home', value: '/introduction/ecosphere' }]"
			)
		.components__description {{ $t("headers.menu") }}

	//- Navbar
	.components__item(
		@click="$ecosphere.handlers.navigate('/components/layout/navbar')"
	)
		.components__showcase
			v-eco-navbar(logo="/img/logo.png", brand="Eco")
		.components__description {{ $t("headers.navbar") }}

	//- Paragraph
	.components__item(
		@click="$ecosphere.handlers.navigate('/components/common/paragraph')"
	)
		.components__showcase
			v-eco-paragraph(:label="$t('extras.wholeheartedly')", type="italic")
		.components__description {{ $t("headers.paragraph") }}

	//- Tag
	.components__item(
		@click="$ecosphere.handlers.navigate('/components/common/tag')"
	)
		.components__showcase
			v-eco-tag(label="Ecosphere :ri-heart-2-line:", theme="success")
		.components__description {{ $t("headers.tag") }}

	//- Avatar
	.components__item(
		@click="$ecosphere.handlers.navigate('/components/common/avatar')"
	)
		.components__showcase.components__showcase--flex
			v-eco-avatar(
				source="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
				size="tiny",
				:circular="true",
				hue="critical"
			)
			v-eco-avatar(source="开心", size="tiny", :circular="false", hue="critical")
		.components__description {{ $t("headers.avatar") }}

	//- Switch
	.components__item(
		@click="$ecosphere.handlers.navigate('/components/input/switch')"
	)
		.components__showcase.components__showcase--flex
			v-eco-switch(label="", hue="secondary", :defaultValue="true")
			v-eco-switch(label="", hue="invert", :defaultValue="true")
			v-eco-switch(label="", hue="critical", :defaultValue="true")
		.components__description {{ $t("headers.switch") }}

	//- Radio
	.components__item(
		@click="$ecosphere.handlers.navigate('/components/input/radio')"
	)
		.components__showcase.components__showcase--flex
			v-eco-radio(label="", hue="success", :defaultValue="true")
			v-eco-radio(label="", hue="warning", :defaultValue="false")
			v-eco-radio(label="", hue="hue", :defaultValue="true")
			v-eco-radio(label="", hue="primary", :defaultValue="false")
		.components__description {{ $t("headers.radio") }}

	//- Checkbox
	.components__item(
		@click="$ecosphere.handlers.navigate('/components/input/checkbox')"
	)
		.components__showcase.components__showcase--flex
			v-eco-checkbox(label="", hue="auto", :defaultValue="false")
			v-eco-checkbox(label="", hue="warning", :defaultValue="true")
			v-eco-checkbox(label="", hue="hue", :defaultValue="false")
			v-eco-checkbox(label="", hue="primary", :defaultValue="true")
		.components__description {{ $t("headers.checkbox") }}

	//- Input
	.components__item(
		@click="$ecosphere.handlers.navigate('/components/input/input')"
	)
		.components__showcase
			v-eco-input(label="", :placeholder="$t('keywords.email')", type="email")
		.components__description {{ $t("headers.input") }}

	//- Dropdown
	.components__item(
		@click="$ecosphere.handlers.navigate('/components/input/dropdown')"
	)
		.components__showcase
			v-eco-dropdown(
				:options="[]",
				placeholder="Select",
				:config="{ theme: 'auto' }"
			)
		.components__description {{ $t("headers.dropdown") }}
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Explore",
});
</script>

<style lang="scss" scoped>
.components {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: $spacer-0-5;
	row-gap: $spacer-0-5;

	@include respond-below(xs) {
		grid-template-columns: 1fr 1fr;
	}

	&__item {
		border: 1px solid $color-helper-grey;
		border-radius: $border-radius-standard;
		overflow: hidden;
		cursor: pointer;
		transition: all $transition-micro ease-in-out;

		&:hover {
			border-color: $color-helper-transparent;
			transform: scale(1.05);
			box-shadow: $box-shadow-medium;

			.components__description {
				color: $color-hue;
			}
		}
	}

	&__showcase {
		padding: $spacer-0-5;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
		height: $spacer-3;

		&--flex {
			display: flex;
			align-items: center;
			justify-content: center;
			column-gap: $spacer-0-25;
		}
	}

	&__description {
		background: $color-background;
		text-align: center;
		padding: $spacer-0-25;
		transition: all $transition-micro ease-in-out;
	}
}
</style>
