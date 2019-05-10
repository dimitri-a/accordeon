import React, { Component } from "react";
import FacilityEntity from "./FacilityEntity";
import data from "./facilities";

export default class FacilitiesSummary extends Component {
  componentDidMount() {

    console.log('data',data)
  }

  render() {

    let results = data.entities;
    console.log(results)
    return (
      <div>
        {results.map(e => (
          <FacilityEntity entity={e}  />
        ))}
      </div>
    );
  }
}
