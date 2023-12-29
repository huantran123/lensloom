import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
import { useFormContext, useController } from 'react-hook-form'
import cls from 'classnames'

const InputField = ({ className, name, type, label }) => {
  const { control } = useFormContext()
  const { field } = useController({name, control, rules: { required: true }})

  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input
        id={name}
        {...field}
        type={type}
      />
    </FormGroup>
  )
}

export default InputField