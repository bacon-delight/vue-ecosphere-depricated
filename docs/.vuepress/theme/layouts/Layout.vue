<script setup>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
</script>

<template>
	<ParentLayout>
		<template #page-bottom>
			<div class="custom-footer">
				MIT Licensed | &copy; {{ new Date().getFullYear() }}
				<a href="https://dipanjande.com/" target="__blank">
					Dipanjan De
				</a>
			</div>
		</template>
	</ParentLayout>
</template>

<style lang="scss">
.custom-footer {
	text-align: center;
	margin-top: 2rem;
	padding-top: 1rem;
	border-top: 1px solid var(--c-details-bg);
}
</style>
