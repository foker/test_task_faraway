import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

interface CharactersResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}

interface CharactersQueryParams {
  page: number;
  search?: string;
}

export const swapiApi = createApi({
  reducerPath: 'swapiApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharactersResponse, CharactersQueryParams>({
      query: ({ page, search }) => ({
        url: 'people',
        params: {
          page,
          ...(search && { search }),
        },
      }),
    }),
    getCharacterById: builder.query<Character, string>({
      query: (id) => `people/${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = swapiApi; 