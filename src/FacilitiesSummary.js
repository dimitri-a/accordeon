import React, { Component } from "react";
import FacilityEntity from "./FacilityEntity";
import data from "./facilities";

export default class FacilitiesSummary extends Component {
  componentDidMount() {
    console.log("data", data);
  }

  sortData(entities) {
    debugger
    var order = {
      entityType: { personal: 1, business: 2 }
    };

    entities.map(ent => ent.facilities.sort((a, b) => order.entityType[a.entityType] - order.entityType[b.entityType]);
    
    
    

    // return entities.sort(function(a, b) {
    //   if (a.name < b.name) {
    //     return -1;
    //   }
    //   if (a.name > b.name) {
    //     return 1;
    //   }
    //   return 0;
    // });
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
