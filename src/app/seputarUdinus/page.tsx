import React from "react";
import SeputarUdinus from "@/components/seputarUdinus";
import axios from "axios";

export default async function Seputarudinus() {
  const response = await axios.get("http://apidev.tvku.tv/api/seputar-dinus-slides-title");
  const title = response.data;
  console.log(title);


  return (
    <>

        <SeputarUdinus />
    </>
  );
}