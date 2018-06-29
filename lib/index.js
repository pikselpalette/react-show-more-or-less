// @flow
import * as React from 'react';

import { renderAs } from 'react-render-as';

/** @memberOf ShowMore */
type Props = {
  children: Array<React.Node>,
  showMore: React.Node|string,
  showLess: React.Node|string,
  as?: React.Node|React.ComponentType<any>|string,
  limit: number
};

/** @memberOf ShowMore */
type State = {
  expanded: boolean
};

export const Anchor = renderAs('a');

export default class ShowMore extends React.Component<Props, State> {
  static defaultProps = {
    limit: 5,
    showMore: 'Show more',
    showLess: 'Show less'
  };

  get children(): Array<React.Node> {
    return React.Children.toArray(this.props.children);
  }

  state = {
    expanded: false
  };

  toggle = () => this.setState({ expanded: !this.state.expanded });

  renderAnchor() {
    if (this.children.length <= this.props.limit) return null;

    return (
      <Anchor onClick={this.toggle} as={this.props.as}>
        {this.state.expanded
          ? this.props.showLess
          : this.props.showMore}
      </Anchor>
    );
  }

  render() {
    const content = this.state.expanded
      ? this.children
      : this.children.slice(0, this.props.limit);

    return (
      <React.Fragment>
        {content}
        {this.renderAnchor()}
      </React.Fragment>
    );
  }
}
