import { PureComponent } from 'react';

export default class Tabs extends PureComponent {
  state = {
    activeTabIndx: 0,
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.activeTabIndx !== this.state.activeTabIndx;
  // }

  setActiveTabInx = idx => {
    this.setState({ activeTabIndx: idx });
  };

  render() {
    console.log(`Re-render @ ${Date.now()}`);

    const { activeTabIndx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIndx];

    return (
      <>
        <div>
          {items.map((item, idx) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabInx(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
}
