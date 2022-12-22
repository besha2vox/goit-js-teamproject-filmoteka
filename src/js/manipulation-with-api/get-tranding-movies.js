const moviesRef = document.querySelector('.films-list');

export async function getTranding() {
  const movies = await api.fetchTrendingMovies('week');
  const template = movies.results.map(galleryTemplate).join('');

  moviesRef.innerHTML = template;
  //   renderPagination(movies.total_pages, refs.pagination, getTranding, api);
}

getTranding();
