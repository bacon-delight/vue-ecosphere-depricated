import { shallowMount } from "@vue/test-utils";
import VEcoText from "@/plugin/components/common/text.vue";

describe("VEcoText", () => {
	it("renders passed message", () => {
		const message = "hello world";
		const wrapper = shallowMount(VEcoText, {
			props: { label: message },
		});
		expect(wrapper.find(".text").exists()).toBe(true);
	});
});
