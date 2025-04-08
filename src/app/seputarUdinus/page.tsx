import React from "react";
import SeputarUdinus from "@/components/seputarUdinus";
import Benefit from "@/components/iklanBenefit";
import axios from "axios";

export default async function Seputarudinus() {
  const response = await axios.get("http://apidev.tvku.tv/api/seputar-dinus-slides-title");
  const title = response.data;
  console.log(title);

  // Define the data variable
  const data = []; // Replace with actual data or fetch logic if needed

  return (
    <>

        <SeputarUdinus titles={title} data={data}/>
    </>
  );
}