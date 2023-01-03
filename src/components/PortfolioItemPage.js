import React from "react";
import { useParams } from 'react-router-dom'

const PortfolioItemPage = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <div>
      This is from an individual portfolio page with id of {id}
    </div>
  )
}

export default PortfolioItemPage;