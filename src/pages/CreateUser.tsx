import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useUserStore } from '../store/userStore'
import { ArrowDowm } from '../assets/icons'
import {
  Form,
  Row,
  InputContainer,
  Label,
  Input,
  ButtonContainer,
  SubmitButton,
  Heading,
  ErrorMessage,
  ErrorHighlight,
  SelectContainer,
  SelectButton,
  SelectedValue,
  Chevrons,
  Options,
  Option,
  SelectRadio,
} from './Form.styles'
import { useNavigate } from 'react-router-dom'

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  userName: yup
    .string()
    .required('Username is required')
    .min(6, 'Username must be at least 6 characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
      'Username must contain both letters and numbers'
    ),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format')
    .matches(emailRegex, 'Invalid email format'),
  phone: yup
    .string()
    .required('Phone number is required')
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'The phone number cannot be more than 15 digits.')
    .matches(/^\d+$/, 'Phone number must only contain digits'),
  status: yup
    .string()
    .oneOf(['active', 'not_active', 'Unknown'], 'Invalid status')
    .nullable(),
})

const CreateUser = () => {
  const { addUser } = useUserStore()
  const navigate = useNavigate()
  const onSubmit = (data: any) => {
    addUser(data)
    navigate('/')
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: { status: null },
  })

  const [selectOpen, setSelectOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionChange = (value_show: any) => {
    setSelectedOption(value_show)
    setSelectOpen(false)
  }

  return (
    <>
      <Heading>
        <span>Create</span> New Item
      </Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <InputContainer>
            <Label htmlFor="name">
              Name <ErrorHighlight>*</ErrorHighlight>
            </Label>
            <Input id="name" {...register('name')} />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="userName">
              Username <ErrorHighlight>*</ErrorHighlight>
            </Label>
            <Input id="userName" {...register('userName')} />
            {errors.userName && (
              <ErrorMessage>{errors.userName.message}</ErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="email">
              Email <ErrorHighlight>*</ErrorHighlight>
            </Label>
            <Input id="email" {...register('email')} />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </InputContainer>
        </Row>
        <Row>
          <InputContainer>
            <Label htmlFor="phone">
              Phone <ErrorHighlight>*</ErrorHighlight>
            </Label>
            <Input id="phone" {...register('phone')} />
            {errors.phone && (
              <ErrorMessage>{errors.phone.message}</ErrorMessage>
            )}
          </InputContainer>
        </Row>

        <SelectContainer>
          <Label htmlFor="status">Status</Label>
          <SelectButton onClick={() => setSelectOpen(!selectOpen)}>
            <SelectedValue>{selectedOption}</SelectedValue>
            <Chevrons>
              <ArrowDowm />
            </Chevrons>
          </SelectButton>
          <Options isVisible={selectOpen}>
            <Option>
              <SelectRadio
                type="radio"
                value="active"
                {...register('status')}
                onChange={() => handleOptionChange('Active')}
              />
              Active
            </Option>
            <Option>
              <SelectRadio
                type="radio"
                value="not_active"
                {...register('status')}
                onChange={() => handleOptionChange('Not Active')}
              />
              Not Active
            </Option>
            <Option>
              <SelectRadio
                type="radio"
                value="Unknown"
                {...register('status')}
                onChange={() => handleOptionChange('Unknown')}
              />
              Unknown
            </Option>
          </Options>
        </SelectContainer>
        <ButtonContainer>
          <SubmitButton type="submit" disabled={!isValid}>
            Submit
          </SubmitButton>
        </ButtonContainer>
      </Form>
    </>
  )
}

export default CreateUser
