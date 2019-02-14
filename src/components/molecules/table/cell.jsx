import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import { Cell as DumpCell, FadeOut } from 'src/components/atoms';


@inject(({ store }, { initX, initY }) => ({
  n: store.table[initY][initX].n,
  addSidebarCell: store.addSidebarCell,
  updateCell: store.updateCell,
  removeSidebarCell: store.removeSidebarCell,
}))
@observer
export class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: 5,
    };

    this.interval = null;
  }

  componentDidUpdate() {
    const { duration } = this.state;
    const { removeSidebarCell, updateCell, initX: x, initY: y } = this.props;

    clearInterval(this.interval);

    this.interval = setTimeout(() => {
      removeSidebarCell(`${y}${x}`);
      updateCell({ x, y, n: null });
    }, duration * 1000);
  }

  handleClick = () => {
    const { addSidebarCell, initX, initY, n } = this.props;

    if (n || n === 0) {
      addSidebarCell(`${initY}${initX}`, n);
    }
  };

  render() {
    const { duration } = this.state;
    const { n } = this.props;

    return (
      <DumpCell
        mode={n >= 0 ? 'blue' : 'red'}
        onClick={this.handleClick}
      >
        {n && (
          <FadeOut
            duration={duration}
            key={Date.now()}
          >
            {n}
          </FadeOut>
        )}
      </DumpCell>
    );
  }
}

Cell.propTypes = {
  initX: PropTypes.number.isRequired,
  initY: PropTypes.number.isRequired,
  n: PropTypes.number,
  addSidebarCell: PropTypes.func,
  updateCell: PropTypes.func,
  removeSidebarCell: PropTypes.func,
};

const noop = () => {}

Cell.defaultProps = {
  n: null,
  addSidebarCell: noop,
  updateCell: noop,
  removeSidebarCell: noop,
};
