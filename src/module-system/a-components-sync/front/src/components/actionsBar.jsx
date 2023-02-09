export default {
  meta: {
    global: true,
  },
  name: 'eb-actions-bar',
  props: {
    // toolbar/swipeout/menu
    mode: {
      type: String,
    },
    left: {
      type: Array,
    },
    right: {
      type: Array,
    },
    more: {
      type: Array,
    },
  },
  methods: {
    getMode() {
      if (this.mode) return this.mode;
      return this.$device.desktop ? 'menu' : 'swipeout';
    },
    _render_swipeout_actions(direction, actions) {
      if (!actions || actions.length === 0) return null;
      const domActions = [];
      for (const action of actions) {
        domActions.push(
          <eb-swipeout-button
            key={action.key}
            close
            color={action.color}
            propsOnPerform={event => action.onPerform(event)}
          >
            <f7-icon color={action.icon.color} f7={action.icon.f7}></f7-icon>
            {action.title}
          </eb-swipeout-button>
        );
      }
      return <eb-swipeout-actions side={direction}>{domActions}</eb-swipeout-actions>;
    },
    _render_swipeout() {
      const domLeft = this._render_swipeout_actions('left', this.left);
      return <div>{domLeft}</div>;
    },
  },
  render() {
    const mode = this.getMode();
    if (mode === 'swipeout') {
      return this._render_swipeout();
    }
    return <div>sssss</div>;
  },
};
