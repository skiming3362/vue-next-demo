<script lang="tsx">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

interface State {
  testCount: number;
}

export default defineComponent({
  name: 'ComponentB',
  setup(props, context) {
    const store = useStore<State>();

    const handleClick = () => {
      context.emit('custom-event');
    };

    return () => (
      <div>
        <div>{store.state.testCount}</div>
        {context.slots.foo ? context.slots.foo({ info: 'info' }) : <div>default foo</div>}
        <button onClick={handleClick}>test emi2</button>
      </div>
    );
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
