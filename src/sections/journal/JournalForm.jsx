import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import FormProvider, { RHFDatePicker, RHFTextField } from '../../components/hook-form';
import { Alert, Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getTrack } from '../../Api';
import { useAuth } from '../../context/AuthContext.jsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const JournalForm = () => {
    const { id } = useParams();
    const [track, setTrack] = useState(null);
    const { token } = useAuth();
    const navigate = useNavigate();

    const JournalSchema = Yup.object().shape({
        title: Yup.string()
            .required("Title is required")
            .max(100),
        description: Yup.string()
            .required("Description is required")
            .max(3000),
        date: Yup.date().required("Date is required"),
    });

    const methods = useForm({
        resolver: yupResolver(JournalSchema),
    });

    const { reset, setError, handleSubmit, formState: { errors }, watch } = methods;
    const onSubmit = async (data) => {
        try {
            data.song = track;
            console.log(data);
            navigate('/journal');
            // here post the data to the db.json 
        } catch (error) {
            console.error(error);
            reset();
            setError("afterSubmit", {
                ...error,
                message: error.message,
            });
        }
    };

    useEffect(() => {
        const getInfo = async () => {
            const _track = await getTrack(token, id);
            setTrack(_track);
        }
        getInfo();
    }, []);

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3} sx={{ my: 2, width: "60vw" }}>
                {!!errors.afterSubmit && (
                    <Alert severity="error">{errors.afterSubmit.message}</Alert>
                )}
                { track &&
                <Card style={{ display: 'flex', alignItems: 'center', padding: '16px', marginBottom: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', transition: 'transform 0.2s ease', '&:hover': { transform: 'scale(1.02)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' } }}>
                    <CardMedia style={{ width: '100px', height: '100px', marginRight: '16px' }} image={track.album.images[0].url} title={track.name} />
                    <CardContent style={{ flex: 1 }}>
                        <Typography variant="h6" component="h3">{track.name}</Typography>
                        <Typography variant="subtitle1" color="textSecondary">{track.artists.map(artist => artist.name).join(', ')}</Typography>
                        <Typography variant="subtitle2" color="textSecondary">{track.album.name}</Typography>
                    </CardContent>
                </Card>
                }

                <RHFTextField name="title" label="Title" charLimit={100}/>
                <RHFTextField name="description" label="Description" multiline rows={5} charLimit={3000}/>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <RHFDatePicker name="date" label="Date"/>
                </LocalizationProvider>
            </Stack>
            <Button
                color='inherit'
                size='large'
                type="submit"
                variant='contained'
                sx={{
                    bgcolor: "text.primary",
                    color: "grey.800",
                    "&:hover": {
                        bgcolor: "text.primary",
                        color: "grey.800",
                    }
                }}
            >
                Post Entry
            </Button>
        </FormProvider>
        
    );
}

export default JournalForm;
