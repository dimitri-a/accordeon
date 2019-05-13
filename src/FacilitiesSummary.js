import React, { Component } from "react";
import FacilityEntity from "./FacilityEntity";
import data from "./facilities";

export default class FacilitiesSummary extends Component {
  componentDidMount() {

    console.log('data',data)
  }

sortData(entities){
  return entities.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})
}
  

  render() {
    let results = this.sortData(data.entities);
    debugger
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
