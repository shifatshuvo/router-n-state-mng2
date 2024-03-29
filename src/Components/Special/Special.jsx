import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";

const Special = ({asset}) => {

  const gift = useContext(AssetContext);

  return (
    <div>
      <h2>Special</h2>
      <h4>Asset: {asset}</h4>
      <p>Also has: {gift}</p>
    </div>
  );
};

export default Special;