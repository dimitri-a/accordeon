import React from 'react'

const FacilityEntity = ({entity}) => {
    console.log(entity)
  return (
    <div>
     {entity.name}, {entity.id},Facility limit: {entity.limit},
    </div>
  )
}

export default FacilityEntity;
