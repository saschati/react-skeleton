import { Form, Formik, FormikConfig, FormikHelpers, type FormikValues } from 'formik'
import React, { memo, useCallback } from 'react'

export type FormikFormProps<Values, ExtraProps> = FormikConfig<Values> &
  ExtraProps &
  React.PropsWithChildren & {
    className?: string
  }

const FormikForm = memo(function FormikForm<
  Values extends FormikValues = FormikValues,
  ExtraProps = object,
>({ children, onSubmit, className, ...rest }: FormikFormProps<Values, ExtraProps>): JSX.Element {
  const handleSubmit = useCallback(
    (values: Values, helper: FormikHelpers<Values>) => {
      console.log('FormikForm (onSubmit):', values)

      return onSubmit(values, helper)
    },
    [onSubmit],
  )

  return (
    <Formik {...rest} onSubmit={handleSubmit}>
      <Form className={className}>{children}</Form>
    </Formik>
  )
})

FormikForm.displayName = 'FormikForm'

export default FormikForm
