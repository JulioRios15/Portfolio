import React from 'react';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

//MUI
import styled from '@mui/system/styled';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface IContactFormData {
    name: string;
    email: string;
    message: string;
}

const formSchema = object({
    name: string().required(),
    email: string().email().required(),
    message: string().max(255).required(),
}).required()


export default function ContactForm() {

    const { register, handleSubmit, formState: {errors}} = useForm<IContactFormData>({
        resolver: yupResolver(formSchema)
    });

    function onSubmit(data: IContactFormData){

    }

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledStack direction="column" spacing={2}>
                <TextField 
                label="Name"
                variant="filled"
                color="primary"
                fullWidth
                error={errors.name? true : false}
                helperText={errors.name? "Name is required" : ""}
                {...register("name")}
                />
                <TextField 
                label="Email"
                variant="filled"
                color="primary"
                fullWidth
                error={errors.email? true : false}
                helperText={errors.email? "Enter a valid email" : ""}
                {...register("email")}
                />
                <TextField 
                label="Message"
                multiline
                rows={6}
                fullWidth
                variant="filled"
                color="primary"
                error={errors.message? true : false}
                helperText={errors.message? "Message is required" : ""}
                
                {...register("message")}
                />
                <Button type='submit' variant='contained'><Typography variant='button'>Submit</Typography></Button>
            </StyledStack>
        </StyledForm>
    )
}

const StyledForm = styled('form')({
    width: "100%"
})
const StyledStack = styled(Stack)({
    width: "100%"
})

const StyledInput = styled(TextField)({})
