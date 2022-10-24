import React from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useFormContext, Controller } from "react-hook-form"

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller

        render={({ field }) => <>  <FloatingLabel
        controlId="floatingInput"
          label={label}
          className="mb-3"
        >
          <Form.Control {...field} />
        </FloatingLabel> </>} control={control} fullwidth="true" name={name} label={label} required={required} defaultValue="" />
    </>
  )
}

export default FormInput

