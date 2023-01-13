import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Select } from 'antd'
import styled from 'styled-components';
import {StyledForm, StyledFormLogo, StyledInput, StyledLabel, StyledButtonsContainer, StyledCancel, StyledSubmit, ErrorSpan} from "./FormStyles"
import { validateHeaderValue } from 'http';

type FormValues = {
    country: string;
    login: number;
    transKey: string;
    secretKey: string;
}

function Form() {

  const { reset, resetField, register, control, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data) 
  }
  
  const options = [
    {label: "Argentina", value: "Argentina"},
    {label: "Brasil", value: "Brasil"},
    {label: "Uruguay", value: "Uruguay"},
    {label: "Chile", value: "Chile"},
    {label: "Perú", value: "Perú"},
    {label: "Bolivia", value: "Bolivia"},
    {label: "Honduras", value: "Honduras"},
    {label: "México", value: "México"}
];
  
const handleClick = () => {
    resetField("country");
    resetField("login");
    resetField("transKey");
    resetField("secretKey");
}

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledFormLogo />
      <div
        style={{
          backgroundColor: "#2580FF",
          height: "3px",
          width: "100%",
          alignSelf: "center",
          marginBottom: "17px",
        }}
      ></div>


      {/* Form fields & inputs */}
      <StyledLabel>
        Choose option to create a local gateway
        <Controller
          control={control}
          name="country"
          render={({ field: { onChange, value } }) => (
            <Select
              onChange={onChange}
              value={value}
              options={options}
              placeholder="Use an existing account"
              mode="multiple"
              style={{
                width: "100%",
              }}
              allowClear
            />
          )}
        />
      </StyledLabel>

      <StyledLabel>
        Login
        <StyledInput  {...register("login", { 
            required: {
                value: true,
                message: "El campo es requerido"
            },
            pattern: {
                value: /^[0-9]+$/,
                message: "Solo se aceptan números"
            }
            })} placeholder="Use an existing account" />
      </StyledLabel>
      {errors.login && <ErrorSpan>{errors.login.message}</ErrorSpan>}
      <StyledLabel>
        Trans key
        <StyledInput {...register("transKey", { 
            required: {
                value: true,
                message: "El campo es requerido"
            },
            pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Solo se aceptan caracteres"
            }
            })} placeholder="Use an existing account"/>
      </StyledLabel>
      {errors.transKey && <ErrorSpan>{errors.transKey.message}</ErrorSpan>}
      <StyledLabel>
        Secret key
        <StyledInput {...register("secretKey", { 
            required: {
                value: true,
                message: "El campo es requerido"
            },
            pattern: {
                value: /^[aA-zZ-]*$/,
                message: "Solo se aceptan caracteres con guiones medios"
            }
            })} placeholder="Use an existing account"/>
      </StyledLabel>
      {errors.secretKey && <ErrorSpan>{errors.secretKey.message}</ErrorSpan>}

      <StyledButtonsContainer>
        <StyledCancel type='button' onClick={handleClick}>Cancel</StyledCancel>
        <StyledSubmit type="submit" value="Continue" />
      </StyledButtonsContainer>
    </StyledForm>
  );
}

export default Form