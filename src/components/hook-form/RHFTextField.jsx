import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";

RHFTextField.propTypes = {
    name: PropTypes.string,
    helperText: PropTypes.node,
};

export default function RHFTextField({ name, helperText, charLimit, ...other }) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={( field, fieldState: { error } ) => {
                const remainingCharacters = charLimit ? charLimit - (field.value ? field.value.length : 0) : undefined;
                return (
                    <TextField
                        {...field}
                        fullWidth
                        inputProps={charLimit ? { maxLength: charLimit } : {}}
                        value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
                        error={!!error}
                        helperText={error ? error?.message : helperText}
                        InputProps={
                            charLimit
                                ? {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {`${remainingCharacters}`}
                                        </InputAdornment>
                                    ),
                                }
                                : <></>
                        }
                        {...other}
                    />
                );
            }}
        />
    );
}
