import React, { memo, useState, useCallback, useEffect } from "react";
import Api from "../../api";
import { ContainerStyled } from "./style";
import Board from "./components/Board";
import Panel from "./components/Panel";

function Main() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("brazil");
  const getCoviData = useCallback((country) => {
    Api.getCountry(country).then((data) => setData(data));
  });
  const updadeAt = new Date().toLocaleDateString();
  const handleChange = ({ target }) => {
    const country = target.value;
    setCountry(country);
  };
  useEffect(() => {
    getCoviData(country);
  }, [getCoviData, country]);
  return (
    <ContainerStyled>
      <div className="mb-2">
        <Panel
          data={data}
          updateAt={updadeAt}
          onChange={handleChange}
          country={country}
          getCovidData={getCoviData}
        ></Panel>
      </div>
      <Board data={data} />
    </ContainerStyled>
  );
}
export default memo(Main);
