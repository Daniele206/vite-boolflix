import { reactive } from "vue";

export const store = reactive({
  apiUrlFilm: 'https://api.themoviedb.org/3/search/movie',
  apiUrlInfoFilm: 'https://api.themoviedb.org/3/movie',
  apiUrlSerieTv: 'https://api.themoviedb.org/3/search/tv',
  apiUrlInfoTv: 'https://api.themoviedb.org/3/tv',
  overviewStatus: false,
  FilmCheck: true,
  SerieTvCheck: true,
  selector: 0,
  filmList: [],
  serieTvList: [],
  respParams: {
    api_key: 'e5faaa8e0f0b7271372dd8dff63da720',
    query: '',
  },
  respInfoParams: {
    api_key: 'e5faaa8e0f0b7271372dd8dff63da720',
  }
})