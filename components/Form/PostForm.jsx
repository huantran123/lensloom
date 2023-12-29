'use client'

import {useState, useEffect} from 'react'
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { useFormContext, useController } from 'react-hook-form'
import Image from 'next/image'
import cls from 'classnames'
// components
import ImageInputField from './ImageInputField'
import InputField from './InputField'
import TagsField from './TagsField'

const ACTION_TYPES = {
  CREATE: 'Create',
  EDIT: 'Edit'
}

const PostForm = ({ type = '', postImage }) => {
  //states
  const [uploadedImage, setUploadedImage] = useState(null)

  // form object
  const { watch, handleSubmit } = useFormContext()
  const onSubmit = (data) => console.log(data)

  return (
    <section className="w-full">
      <h2>
        <span>{type} post</span>
      </h2>

      {/* Preview image */}
      <Image
        src={postImage || uploadedImage || "/assets/images/default-image.jpg"}
        alt="previewed image"
        className="mt-7 rounded-lg` object-cover w-full aspect-[3/2] sm:w-[15rem] sm:h-[10rem]"
        width={240}
        height={160}
      />

      <Form className='mt-7 w-full max-w-2xl flex flex-col' onSubmit={handleSubmit(onSubmit)}>
        {/* Upload image */}
        {type === ACTION_TYPES.CREATE && (
          <ImageInputField
            name="postImage"
            setUploadedImage={setUploadedImage}
          />
        )}

        {/* Description */}
        <InputField
          name="description"
          type="textarea"
          label="Description"
        />

        {/* Tags */}
        <TagsField />

        {/* Button */}
        <button className="primary_btn w-fit" type="submit">{type} post</button>
      </Form>
    </section>
  )
}

export default PostForm