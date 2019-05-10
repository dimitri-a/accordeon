import React, { Fragment } from "react";
import FacilityEntityDetail from "./FacilityEntityDetail";

const FacilityEntity = ({ entity }) => {
  console.log(entity);
  return (
    <Fragment>
      {entity.name}, {entity.id},Facility limit: {entity.limit},
      {entity.facilities.map(f => (
        <FacilityEntityDetail detail={f} />
      ))}
    </Fragment>
  );
};

export default FacilityEntity;
