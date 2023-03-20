declare module 'craco-swc' {
  import { CracoPluginDefinition } from '@craco/types'

  export interface SWCOptions {
    jsc?: {
      parser?: {
        syntax?: 'ecmascript' | 'typescript' | 'latest'
        tsx?: boolean
        dynamicImport?: boolean
        [key: string]: any
      }
      transform?: {
        react?: {
          development?: boolean
          [key: string]: any
        }
        [key: string]: any
      }
      [key: string]: any
    }
    module?: {
      type?: 'commonjs' | 'amd' | 'umd' | 'systemjs' | 'es6' | 'es2015' | 'es2020' | 'esnext'
      strict?: boolean
      noInterop?: boolean
      strictMode?: boolean
      [key: string]: any
    }
    target?:
      | 'es3'
      | 'es5'
      | 'es6'
      | 'es2015'
      | 'es2016'
      | 'es2017'
      | 'es2018'
      | 'es2019'
      | 'es2020'
      | 'es2021'
      | 'latest'
    [key: string]: any
  }

  export interface SwcLoaderOptions {
    swcLoaderOptions: SWCOptions
  }

  export type CractSwcPlugin = CracoPluginDefinition<SwcLoaderOptions>
}
