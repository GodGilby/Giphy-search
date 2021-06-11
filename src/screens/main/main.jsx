import React, { useState, useEffect } from "react";
import axios from "axios";

import { Grid } from "@material-ui/core";

//Components
import Card from "../../components/card/card.component";
import SearchBox from "../../components/searchBox/searchbox.component";

const Main = () => {
  var api = "gdwjphWDU038gRbOZBeOX0oNWQZEdPGM";
  const BASE_URL = "https://api.giphy.com/v1/gifs/";

  const [giph, setGiph] = useState([]);
  const [giphFiltered, setgiphFiltered] = useState([]);


  useEffect(() => {
    axios
      .get(BASE_URL + `trending?api_key=${api}`)
      .then(resp => {
        if (resp.data) {
          setGiph(resp.data.data);
        }
      })
      .catch(e => {
        alert(e);
      });
  }, [api]);


  const getFilteredGiph = () => {
    axios
      .get(BASE_URL + `search?q=${giphFiltered}&api_key=${api}`)
      .then(resp => {
        if (resp.data) {
          setGiph(resp.data.data);
        }
      })
      .catch(e => {
        alert(e);
      });
  };

  const onChange = data => {
    //Set the state
    setgiphFiltered(data);
  };

  const onSubmit = e => {
    e.preventDefault();
    getFilteredGiph();
  };

  return (
    <>
      <Grid
        container
        directon="row"
        justify="space-between"
        spacing={4}
      >
        <Grid item lg={10} xs={12}>
          <SearchBox cb={data => onChange(data)}></SearchBox>
        </Grid>
        <Grid
          item
          lg={2}
          xs={12}
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center"
          }}
        >
          <button
            style={{
            marginRight: "20px",
              padding: "10px 40px",
              width: "100%",
              borderRadius: "5px",
              border: "1px solid #00000066"
            }}
            onClick={e => onSubmit(e)}
          >
            Search
          </button>
        </Grid>
      </Grid>
      <Grid container >
        {giph.map((gip, index) => {
          return <Card key={index} data={gip} />;
        })}
      </Grid>
    </>
  );
};

export default Main;
