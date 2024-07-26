import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useUserStore } from '../store/userStore'
import { useNavigate, useParams } from 'react-router-dom'
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
    .email('Invalid email format'),
  phone: yup
    .string()
    .required('Phone number is required')
    .min(10, 'Phone number must be at least 10 digits')
    .matches(/^\d+$/, 'Phone number must only contain digits'),
  status: yup
    .string()
    .oneOf(['active', 'not_active'], 'Invalid status')
    .nullable(),
})

const UserFormEdit = () => {
  const { userId } = useParams<{ userId: string }>()
  const { users, updateUser } = useUserStore()
  const navigate = useNavigate()

  const user = users.find((u, index) => index + 1 === Number(userId))
  const [initialValues, setInitialValues] = useState(user)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  const [selectOpen, setSelectOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(user?.status)

  const handleOptionChange = (value_show: any) => {
    setSelectedOption(value_show)
    setSelectOpen(false)
  }
  useEffect(() => {
    if (user) {
      setInitialValues(user)
      reset(user)
    }
  }, [user, reset])

  const handleUpdate = (data: any) => {
    updateUser(userId as string, data)
    navigate('/')
  }

  return (
    <>
      <Heading>
        <span>Edit</span> Item
      </Heading>
      <Form onSubmit={handleSubmit(handleUpdate)}>
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

export default UserFormEdit
