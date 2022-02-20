import { shallowMount } from "@vue/test-utils";
import VEcoDot from "@/plugin/components/common/dot.vue";

describe("VEcoDot", () => {
	it("renders status with appropriate class", () => {
		const type = "information";
		const wrapper = shallowMount(VEcoDot, {
			props: { type },
		});
		expect(wrapper.find(".dot").exists()).toBe(true);
		expect(wrapper.find(`.dot--${type}`).exists()).toBe(true);
	});
});
