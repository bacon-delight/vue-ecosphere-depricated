import { shallowMount } from "@vue/test-utils";
import VEcoLink from "@/plugin/components/action/link.vue";

describe("VEcoLink", () => {
	it("renders passed message as a link", () => {
		const message = "hello world";
		const wrapper = shallowMount(VEcoLink, {
			props: { label: message },
		});
		expect(wrapper.find("a").exists()).toBe(true);
		expect(wrapper.find(".link").exists()).toBe(true);
	});
});
