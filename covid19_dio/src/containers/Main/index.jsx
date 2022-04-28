import React, { memo, useState, useCallback, useEffect } from "react";
import Api from "../../api";
import { ContainerStyled } from "./style";
import Board from "./components/Board";

function Main() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("brazil");
  const getCoviData = useCallback((country) => {
    Api.getCountry(country).then((data) => setData(data));
  });
  useEffect(() => {
    getCoviData(country);
  }, [getCoviData, country]);
  return (
    <ContainerStyled>
      <div className="mb-2"></div>
      <Board data={data} />
    </ContainerStyled>
  );
}
export default memo(Main);
