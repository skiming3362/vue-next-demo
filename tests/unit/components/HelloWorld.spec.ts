import { mount } from '@vue/test-utils';
import store from '@/store';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  const msg = 'new message';
  const wrapper = mount(HelloWorld, {
    props: { msg },
    global: {
      plugins: [store],
    },
  });
  it('renders props.msg when passed', () => {
    expect(wrapper.text()).toContain(msg);
  });

  it('find all btns', () => {
    const btns = wrapper.findAll('button');
    console.log(btns.length);

    expect(btns.length).toBeGreaterThan(0);
  });
});
