import { api } from '../api'

export type Entity = {
  id: string
  name: string
}

interface PostExampleQuery {
  data: Entity
}

interface PostExampleResponse {
  data: Entity
}

interface GetExampleResponse {
  data: Entity[]
}

interface GetExampleQuery {
  page: number
}

export const exampleApi = api.injectEndpoints({
  endpoints: (build) => ({
    exampleGetSome: build.query<GetExampleResponse, GetExampleQuery>({
      query: ({ page = 1 }) => ({
        url: 'example',
        params: {
          page,
        },
      }),
      providesTags: ['Example'],
    }),
    examplePostSome: build.mutation<PostExampleResponse, PostExampleQuery>({
      query: (data) => ({
        url: 'example',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Example'],
    }),
  }),
})

export const { useExampleGetSomeQuery, useExamplePostSomeMutation } = exampleApi
