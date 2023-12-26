'use client'

import {useState, useEffect} from 'react'
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import Image from 'next/image'
import cls from 'classnames'
import * as yup from 'yup'

const ACTION_TYPES = {
  CREATE: 'Create',
  EDIT: 'Edit'
}

const PostForm = ({ type = '', postPhoto }) => {
  const [uploadedImage, setUploadedImage] = useState(null)

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
    <section className="w-full">
      <h2>
        <span>{type} post</span>
      </h2>

      <Form className='mt-10 w-full max-w-2xl flex flex-col'>
        <Image
          src={postPhoto || uploadedImage || "/assets/images/default-image.jpg"}
          alt="post photo"
          className="mb-3 rounded-md object-cover w-full h-auto aspect-[3/2] sm:w-[15rem] sm:h-[10rem]"
          width={240}
          height={160}
        />
        {/* Upload photo */}
        {type === ACTION_TYPES.CREATE && (
          <FormGroup>
            <Label for="postPhoto">Photo</Label>
            <Input
              id="postPhoto"
              name="postPhoto"
              type="file"
              accept="image/*"
              onChange={handleUploadImage}
            />
          </FormGroup>
        )}

        {/* Description */}
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            id="description"
            name="description"
            type="textarea"
          />
        </FormGroup>

        {/* Tags */}
        <FormGroup>
          <Row>
            <Col xs={9} md={6}>
              <Label for="tags">Tags</Label>
              <Input
                id="description"
                name="description"
                type="textarea"
              />
            </Col>
            <Col xs={3} md={6}>
              <button>Add tag</button>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>#Hello</p>
            </Col>
          </Row>
        </FormGroup>

        {/* Button */}
        <button className="primary_btn w-fit">{type} post</button>
      </Form>
    </section>
  )
}

export default PostForm