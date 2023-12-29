import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import cls from 'classnames'

// components
import InputField from './InputField'

const TagsField = ({ className }) => {
  return (
    <Container>
      <Row>
        <Col xs={9} md={6}>
          <InputField
            name="tags"
            label="Tags"
            type="text"
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
    </Container>
  )
}

export default TagsField