import Button, { ButtonProps } from '@/UI/Button'
import { useFormikContext } from 'formik'
import React from 'react'

export type FormikButtonProps = Omit<ButtonProps, 'onClick'> & {
  disableOnInvalid?: boolean
}

const FormikButton: React.FC<FormikButtonProps> = ({ disableOnInvalid, ...rest }): JSX.Element => {
  const { isSubmitting, isValid } = useFormikContext()

  return (
    <Button disabled={(!isValid && disableOnInvalid) || isSubmitting} {...rest} type="submit" />
  )
}

export default FormikButton
