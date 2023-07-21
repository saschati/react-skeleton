import * as Yup from 'yup'
import mime from 'mime'

Yup.addMethod(Yup.mixed, 'file', function (errorMessage = 'Is not file.') {
  return this.test('file', errorMessage as string, function (value) {
    const { path, createError } = this

    if (!value) {
      return true
    }

    return value instanceof File || createError({ path, message: errorMessage as string })
  })
})

Yup.addMethod(
  Yup.mixed,
  'fileExt',
  function (extension: string, errorMessage = 'Unsupported Format.') {
    const exts = extension.split(',').map((ext) => mime.getType(ext))

    return this.test('fileExt', errorMessage as string, (value) => {
      if (!value) {
        return true
      }

      return exts.includes((value as File).type)
    })
  },
)

Yup.addMethod(Yup.mixed, 'fileSize', function (size: number, errorMessage = 'File too large.') {
  return this.test('fileSize', errorMessage as string, (value) => {
    if (!value) {
      return true
    }

    return (value as File).size <= size * 1024
  })
})

export default Yup
