import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// load css
import './FilterDashboard.css';

const FilterDashboard = () => {
  const [currBulan, setCurrBulan] = useState(1);
  const [currTahun, setCurrTahun] = useState(2021);

  const onBulanChange = (event) => {
    setCurrBulan(event.target.value);
  };

  const onTahunChange = (event) => {
    setCurrTahun(event.target.value);
  };

  return (
    <div className="filter-wrapper">
      {/* FILTER */}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Bulan</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currBulan}
          label="Age"
          onChange={onBulanChange}
        >
          <MenuItem value={1}>Januari</MenuItem>
          <MenuItem value={2}>Febuari</MenuItem>
          <MenuItem value={3}>Maret</MenuItem>
          <MenuItem value={4}>April</MenuItem>
          <MenuItem value={5}>Mei</MenuItem>
          <MenuItem value={6}>Juni</MenuItem>
          <MenuItem value={7}>Juli</MenuItem>
          <MenuItem value={8}>Agustus</MenuItem>
          <MenuItem value={9}>September</MenuItem>
          <MenuItem value={10}>Oktober</MenuItem>
          <MenuItem value={11}>November</MenuItem>
          <MenuItem value={12}>Desember</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tahun</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currTahun}
          label="Age"
          onChange={onTahunChange}
        >
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2023}>2023</MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined">Filter</Button>
      {/* END OF FILTER */}
    </div>
  );
};

export default FilterDashboard;
