import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
import { useFormContext, useController } from 'react-hook-form'
import cls from 'classnames'

const ImageInputField = ({ className, name, setUploadedImage }) => {
  const { control } = useFormContext()
  const { field } = useController({name, control, rules: { required: true }})

  const handleUploadImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <FormGroup className={cls(className)}>
      <Label for="postImage">Image</Label>
      <Input
        id="postImage"
        {...field}
        type="file"
        accept="image/*"
        onChange={(e) => {
          field.onChange(e)
          handleUploadImage(e)
        }}
      />
    </FormGroup>
  )
}

export default ImageInputField