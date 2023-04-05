import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const { fetchByParams, getProducts } = useProducts();
  useEffect(() => {
    setSearchParams({ q: search });
    getProducts();
  }, [search]);

  return (
    <Grid>
      <div style={{ marginTop: "15px" }}>
        <span style={{ marginRight: "14px", cursor: "pointer" }}>
          Вы находитесь:
        </span>
        <span style={{ marginRight: "14px" }}></span>
        <span
          style={{ marginRight: "14px", cursor: "pointer", color: "green" }}
        >
          Аксессуары
        </span>
      </div>

      <br />
      <Paper elevation={1} sx={{ width: "200px", boxShadow: "none" }}>
        <TextField
          id="standard-basic"
          label="Поиск"
          variant="standard"
          fullWidth
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <Grid>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Типы</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("type", e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="Все" />
              <FormControlLabel value="Game" control={<Radio />} label="Game" />
              <FormControlLabel
                value="Console"
                control={<Radio />}
                label="Console"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SideBar;
