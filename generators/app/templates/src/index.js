import styles from './index.less';
import React from 'react';
import cssModules from 'react-css-modules';
import Cnt from './cnt.js';

class Component extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    return (
      <div onClick={this.handleClick} styleName="fdt-react-demo">
        <span>展开</span>
        {this.state.show ? <Cnt /> : null}
      </div>
    );
  }
}

Component.defaultProps = {

};

Component.propTypes = {

};

export default cssModules(Component, styles);
