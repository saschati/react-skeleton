import { createSlice } from '@reduxjs/toolkit'
import { Entity, exampleApi } from '../../services/injects/example'

type ExampleState = {
  example: Entity[]
}

const initialState: ExampleState = {
  example: [],
}

const slice = createSlice({
  name: 'example',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET example
    builder.addMatcher(exampleApi.endpoints.exampleGetSome.matchFulfilled, (state, action) => {
      state.example = action.payload.data
    })

    // POST example
    builder.addMatcher(exampleApi.endpoints.examplePostSome.matchFulfilled, (state, action) => {
      state.example = [...state.example, action.payload.data]
    })
  },
})

export default slice.reducer
