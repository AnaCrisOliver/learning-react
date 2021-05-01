const API_KEY = '70fcf9c961f094f426fd44a78207a297';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export default {
    getHomeList: async () => {
        return [
          /*  {
                slug: 'mylist',
                title: 'My list',
                items: 
            },*/         
            {
                slug: 'originals',
                title: 'Netflix originals',
                items: await basicFetch(`/discover/tv?with_network=213&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recommended for you',
                items: await basicFetch(`/trending/all/week?&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Top rated',
                items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            },     
            {
                slug: 'drama',
                title: 'Drama',
                items: await basicFetch(`/discover/movie?with_genres=18&api_key=${API_KEY}`)
            },
            {
                slug: 'sciencefiction',
                title: 'Science Fiction',
                items: await basicFetch(`/discover/movie?with_genres=878&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentary',
                items: await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
            },         
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Action',
                items: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};
        let trailer = {};

        if(movieId){
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?&api_key=${API_KEY}`);
                    
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }

        return info;
    }
} 