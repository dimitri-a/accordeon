import React, { Component } from "react";
import FacilityEntity from "./FacilityEntity";
import data from "./facilities";

export default class FacilitiesSummary extends Component {
  componentDidMount() {
    console.log("data", data);
  }

  sortData(entities) {
    debugger;
    var order = {
      entityType: { personal: 2, business: 1 }
    };

    return entities.map(ent =>
      entities.sort(
        (a, b) =>
          a.name - b.name ||
          order.entityType[a.facilities.entityType] - order.entityType[b.facilities.entityType]
      )
    );
  }

  render() {
    let results = this.sortData(data.entities);
    console.log("hier", results);
    return (
      <div>
        {results.map(e => (
          <FacilityEntity entity={e} />
        ))}
      </div>
    );
  }
}
