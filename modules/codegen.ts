import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './src/schema/**/*.graphql',
  generates: {
    './src/schema/': {
      preset: 'graphql-modules',
      presetConfig: {
        baseTypesPath: '../generated-types/graphql.ts',
        filename: 'generated-types/module-types.ts'
      },
      plugins: [
        {
          add: {
            content: '/* eslint-disable */'
          }
        },
        'typescript',
        'typescript-resolvers'
      ]
    }
  }
}
export default config
