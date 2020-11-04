<script lang="tsx">
import { defineAsyncComponent, defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'TestCom',
  components: {
    ComponentB: defineAsyncComponent(() => import('@/components/ComponentB.vue')),
  },
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const obj = reactive({
      a: 1,
    });

    const handleClick = () => {
      obj.a++;
    };

    const slots = {
      foo: ({ info }: { info: string }) => <div>{info}</div>,
    };

    const handle = () => {
      console.log(111111);
    };

    return () => (
      <div>
        {props.msg}
        <div>{obj.a}</div>
        <button onClick={handleClick}>test</button>
        <component-b v-slots={slots} onCustomEvent={handle}></component-b>
      </div>
    );
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
