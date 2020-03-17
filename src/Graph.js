import React from 'react';
import TypesFactory from './types'

class Graph extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
    	nodes: props.nodes,
      links: props.links
    };
  }

  componentDidMount() {
    this.force = d3.forceSimulation(this.state.nodes)
      .force("charge",
        d3.forceManyBody().strength(this.props.forceStrength)
      )
      .force("link",
        d3.forceLink().distance(this.props.linkDistance).links(this.state.links).id(d => d.id)
      )
      .force("x", d3.forceX(this.props.width / 2))
      .force("y", d3.forceY(this.props.height / 2));

    this.force.on('tick', () => this.setState({
    	links: this.state.links,
    	nodes: this.state.nodes
    }));
  }

  componentWillUnmount() {
    this.force.stop();
  }

  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
              markerWidth="6" markerHeight="6"
              orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" />
          </marker>
        </defs>
      	{this.state.links.map((link, index) =>(
          <line
            x1={link.source.x}
            y1={link.source.y}
            x2={link.target.x}
            y2={link.target.y}
            key={`line-${index}`}
            stroke="black"

            marker-end="url(#arrow)"
          />
        ))}
      	{this.state.nodes.map((node, index) =>(
        	<circle r={node.r} cx={node.x} cy={node.y} fill="red" key={index}/>
        ))}
      </svg>
    );
  }
}

Graph.defaultProps = {
  // width: 300,
  // height: 300,
  // linkDistance: 30,
  // forceStrength: -20
};

// const nodes = TypesFactory.types().map(type => ({
//   r: 1,
//   x: 0,
//   y: 0,
//   id: type.id(),
// }));

// const links = TypesFactory.types().map(type => (
//   type.weakAgainst().map(weakType => ({
//     source: type.id(),
//     target: weakType.id(),
//   })
//   ))).flat()

export default Graph;