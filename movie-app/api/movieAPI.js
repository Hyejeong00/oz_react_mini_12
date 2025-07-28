const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (endpoint, token) => {
    let results = [];
    let page = 1;

    while (results.length < 20) {
        const response = await fetch(`${BASE_URL}${endpoint}&page=${page}`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('영화 API 응답 오류');
        }

        const data = await response.json();
        const nonAdult = data.results.filter(movie => !movie.adult);
        results.push(...nonAdult);
        page++;

        if (page > data.total_pages) break;
    }

    return results.slice(0, 20);
};
