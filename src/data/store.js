import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/movie',
  filmList: [],
  respParams: {
    api_key: 'e5faaa8e0f0b7271372dd8dff63da720',
    query: '',
  },
})