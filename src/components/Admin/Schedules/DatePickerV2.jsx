import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { MultiInputDateRangeField } from "@mui/x-date-pickers-pro/MultiInputDateRangeField";

function DatePickerV2({ children }) {
  const [value, setValue] = useState([]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box className="w-full p-10 max-w-[20rem]">
        <MultiInputDateRangeField
          startText="Inicio"
          endText="Fim"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> - </Box>
              <TextField {...endProps} />
            </>
          )}
        />
      </Box>
    </LocalizationProvider>
  );
}

export default DatePickerV2;
