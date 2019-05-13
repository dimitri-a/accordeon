import React, { Component } from "react";
import FacilityEntity from "./FacilityEntity";
import data from "./facilities";

export default class FacilitiesSummary extends Component {
  componentDidMount() {
    console.log("data", data);
  }

  sortData(entities) {
    let order = {
      entityType: { personal: 1, business: 2, mixed: 3 }
    };

    let limitOrder = entities.map(e => {
      e.facilities.sort((a, b) => b.limit - a.limit);
      return e;
    });

    return limitOrder.sort((a, b) => {
      return (
        a.name.localeCompare(b.name) ||
        order.entityType[a.entityType] - order.entityType[b.entityType]
      );
    });
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
