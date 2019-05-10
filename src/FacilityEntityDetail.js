import React  from 'react'

const FacilityEntityDetail = ({detail}) => {




   return (
    <div>
     {detail.type}, {detail.account}, todo: icon NEW, Last Modified : {detail.modified} <button>View/Edit</button> todo icon delete
    </div>
  )
}

export default FacilityEntityDetail;
