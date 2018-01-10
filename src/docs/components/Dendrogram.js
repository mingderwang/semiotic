import React from "react"
import DocumentComponent from "../layout/DocumentComponent"
import { NetworkFrame } from "../../components"
import DendrogramRaw from "./DendrogramRaw"
import { MenuItem } from "material-ui/Menu"
import Input, { InputLabel } from "material-ui/Input"
import { FormControl, FormHelperText } from "material-ui/Form"
import Select from "material-ui/Select"

const components = []

components.push({
  name: "Dendrogram"
})

export default class Dendrogram extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      type: "treemap",
      projection: "vertical"
    }
  }
  render() {
    const typeOptions = [
      "sankey",
      "force",
      "tree",
      "cluster",
      "circlepack",
      "treemap",
      "partition"
    ].map(d => (
      <MenuItem key={"type-option-" + d} label={d} value={d}>
        {d}
      </MenuItem>
    ))

    const projectionOptions = ["vertical", "horizontal", "radial"].map(d => (
      <MenuItem key={"type-option-" + d} label={d} value={d}>
        {d}
      </MenuItem>
    ))
    const buttons = [
      <FormControl key="button-1-0-0">
        <InputLabel htmlFor="chart-type-input">Chart Type</InputLabel>
        <Select
          value={this.state.type}
          onChange={e => this.setState({ type: e.target.value })}
        >
          {typeOptions}
        </Select>
      </FormControl>,
      <FormControl key="button-2-0-0">
        <InputLabel htmlFor="chart-projection-input">Projection</InputLabel>
        <Select
          value={this.state.projection}
          onChange={e => this.setState({ projection: e.target.value })}
        >
          {projectionOptions}
        </Select>
      </FormControl>
    ]

    const annotations = []

    const examples = []

    examples.push({
      name: "Basic",
      demo: DendrogramRaw({
        annotations: undefined,
        type: this.state.type,
        projection: this.state.projection
      }),
      source: `
`
    })

    return (
      <DocumentComponent
        name="Dendrogram"
        components={components}
        examples={examples}
        buttons={buttons}
      >
        <p>
          If you send hierarchical data to NetworkFrame (hierarchical JSON to
          the edges property) you can use the various hierarchical diagrams in
          D3 to display that data--"tree", "cluster", "circlepack", "partition"
          and "treemap" which all correspond to D3's tree, cluster, pack,
          partition and treemap layouts. In cases where a layout can honor
          differences in projection (such as "radial", "horizontal" or
          "vertical" for cluster or radial for partition to make a sunburst) it
          will honor those as a projection property of networkType. Other
          properties passed to networkType that correspond to properties
          specific to those layouts, such as padding for treemap and partition,
          will be passed through. You can pass any kind of tree layout function
          that processes hierarchical data like that created with d3-hierarchy.
          Hierarchical JSON can be sent to any NetworkFrame edges property.
        </p>
        <p>The dataset is a pruned map of the D3v3 library.</p>
      </DocumentComponent>
    )
  }
}

Dendrogram.title = "Dendrogram"
