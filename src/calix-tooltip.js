import React from 'react';
import './scss/calix-tooltip.scss';


class CalixTooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ showTooltip: true });
  };

  handleMouseLeave = () => {
    this.setState({ showTooltip: false });
  };

  render() {
    const { text, children, position } = this.props;
    const { showTooltip } = this.state;

    return (
      <div
        className={`tooltip-container ${position}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
        {showTooltip && <div className={`tooltip ${position}`}>{text}</div>}
      </div>
    );
  }
}

export default CalixTooltip;
