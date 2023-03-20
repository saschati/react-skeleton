import { CracoConfig } from '@craco/types'
import { when, whenDev } from '@craco/craco'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import path from 'path'

const CracoSwcPlugin = require('craco-swc')

const craco: CracoConfig = {
  webpack: {
    configure: (webpackConfig) => {
      return webpackConfig
    },
    plugins: {
      add: [
        ...(whenDev<CircularDependencyPlugin[]>(() => [new CircularDependencyPlugin()]) || []),
        ...(when<BundleAnalyzerPlugin[]>(process.env.BOUNDLE_ANALIZE === 'true', () => [
          new BundleAnalyzerPlugin({ analyzerHost: '0.0.0.0', analyzerPort: 8888 }),
        ]) || []),
      ],
    },
  },
  style: {
    sass: {
      loaderOptions: (sassLoaderOptions: object) => {
        sassLoaderOptions = {
          ...sassLoaderOptions,
          sassOptions: {
            sassLoader: {
              includePaths: [path.resolve('src', 'styles')],
            },
          },
        }

        return sassLoaderOptions
      },
    },
  },
  plugins: [
    {
      plugin: CracoSwcPlugin,
      options: {
        swcLoaderOptions: {
          sync: true,
          jsc: {
            externalHelpers: true,
            target: 'es2015',
            parser: {
              syntax: 'typescript',
              tsx: true,
              dynamicImport: true,
              exportDefaultFrom: true,
              decorators: true,
              decoratorsBeforeExport: true,
              importMeta: true,
              classProperties: true,
              jsxPragma: 'React',
              jsxFragmentPragma: 'React.Fragment',
            },
            transform: {
              react: {
                runtime: 'automatic',
              },
            },
          },
        },
      },
    },
  ],
}

export default craco
