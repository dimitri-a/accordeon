import React, { Fragment, useState } from "react";
import FacilityEntityDetail from "./FacilityEntityDetail";

const FacilityEntity = ({ entity }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <div onClick={() => setDetailsVisible(!detailsVisible)}>
      {/* {detailsVisible && (<div>testing detailsVisible is true!!!!</div>)} */}
      {entity.name}, {entity.id},Facility limit: {entity.limit},
      {detailsVisible &&
        entity.facilities.map(f => <FacilityEntityDetail detail={f} />)}
    </div>
  );
};

export default FacilityEntity;
