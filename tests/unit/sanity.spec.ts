import { shallowMount } from "@vue/test-utils";
import Test from "@/plugin/Test.vue";

describe("Test.vue", () => {
	it("renders props.msg when passed", () => {
		const message = "Mount Successful";
		const wrapper = shallowMount(Test, {
			props: { message },
		});
		expect(wrapper.text()).toMatch(message);
	});
});
