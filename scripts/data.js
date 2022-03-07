let dataArr = [
    {
        img: "https://www.imdb.com/title/tt0111161/mediaviewer/rm10105600/?ref_=tt_ov_i",
        name: "The Shawshank Redemption",
        genre:"Drama",
        rating:9.2
    },
    {
        img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
        name: "The Godfather",
        genre:"Drama, Crime",
        rating:8.4
    },

    {
        img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
        name: "The Dark Knight",
        genre:"Drama, Crime, Action",
        rating:7.2
    },

    {
        img: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
        name: "The Godather-II",
        genre:"Drama, Crime",
        rating:9.0
    },

    {
        img: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
        name: "The Angry Men",
        genre:"Drama, Crime",
        rating:6.0
    },

    {
        img: "https://m.media-amazon.com/images/M/MV5BMTg3MDc4ODgyOF5BMl5BanBnXkFtZTgwNzY1ODIyNjM@._V1_QL75_UX380_CR0,19,380,562_.jpg",
        name: "Schindler's List",
        genre:"Drama, Biography, History",
        rating:7.6
    },

    {
        img: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
        name: "The Lord of The Rings",
        genre:"Drama, Action, Adventure",
        rating:9.2
    },

    {
        img: "https://www.imdb.com/title/tt0317248/mediaviewer/rm2898330112/?ref_=tt_ov_i",
        name: "City of God",
        genre:"Drama,Crime",
        rating:8.8
    },

    {
        img: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
        name: "Interstellar",
        genre:"Adventure, Drama, Sci-fi",
        rating:9.8
    },
];
localStorage.setItem("data", JSON.stringify(dataArr))