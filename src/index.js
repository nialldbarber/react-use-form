import { useState } from 'react'

export const useForm = (initialValues, callback) => {
  const [ values, setValues ] = useState(initialValues)

  const handleChange = (e) => {
    const { value, name } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    callback()
    setValues(initialValues)
  }

  return {
    values,
    handleChange,
    handleSubmit,
  }
}
