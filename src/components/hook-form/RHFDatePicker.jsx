import React from 'react';
import { Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';

const RHFDatePicker = ({ name, label, control, error, helperText, ...rest }) => {
    return (
        <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <DatePicker
            {...field}
            {...rest}
            /*renderInput={(params) => (
                <TextField
                {...params}
                label={label}
                error={error}
                helperText={helperText}
                />
            )}*/
            slotProps={{ textField: { variant: 'outlined' } }}
            />
        )}
        />
    );
};

export default RHFDatePicker;

