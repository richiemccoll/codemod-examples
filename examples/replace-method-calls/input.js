import RenderLib from "render-lib";

class Component {
  state = {
    loading: false,
    mounted: false,
  };

  willMount() {
    this.loading = true;
  }

  didMount() {
    this.mounted = true;
  }

  willUpdate(newProps) {
    return RenderLib.scheduleUpdate(newProps).then(() => this.render());
  }

  render() {
    return RenderLib.createDom();
  }
}

export default Component;
