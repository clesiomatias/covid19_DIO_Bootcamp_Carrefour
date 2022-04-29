import React, { memo } from "react";
import PropTypes from "prop-types";
import { Grid, Skeleton } from "../../../components";
import Card from "./Card";

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;
  const getValue = (value) =>
    value ? value : <Skeleton variant="text" width={182} height={60} />;

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          value={getValue(todayDeaths)}
          label="Óbitos hoje"
          color="#ffee05"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          value={getValue(todayCases)}
          label="Casos de hoje"
          color="#040405"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          value={getValue(deaths)}
          label="Total de mortos"
          color="#9c0404"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          value={getValue(recovered)}
          label="Total de recuperados"
          color="#038b0f"
        />
      </Grid>
    </Grid>
  );
}
export default memo(Board);
