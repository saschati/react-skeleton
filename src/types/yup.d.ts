// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { MixedSchema } from 'yup'

declare module 'yup' {
  interface MixedSchema {
    file(errorMessage?: string): MixedSchema
    fileExt(extension: string, errorMessage?: string): MixedSchema
    fileSize(size: number, errorMessage?: string): MixedSchema
  }
}
