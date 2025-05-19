const submitBtn = document.getElementById('submit-el');
const inputEl = document.getElementById('input-el');
const container = document.querySelector('.container');
const prevBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const api = 'https://jsonfakery.com/movies/paginated?limit=10&page=';

async function getMovie() {
    const promise = await fetch(api);
    const process = await promise.json();
    const data = process.data

    container.innerHTML = `
        <div class="allDiv">
            <img src="${process.data[0].poster_path}" alt="" class="image">
            <h3 class="title">${process.data[0].original_title}</h3>
            <p class="info">${process.data[0].overview}</p>
            <p class="release">Release Date: ${process.data[0].release_date}</p>
            <p class="rate">Rating: ${process.data[0].vote_average}/10</p>
        </div>
        <div class="allDiv">
            <img src="${process.data[1].poster_path}" alt="" class="image">
            <h3 class="title">${process.data[1].original_title}</h3>
            <p class="info">${process.data[1].overview}</p>
            <p class="release">Release Date: ${process.data[1].release_date}</p>
            <p class="rate">Rating: ${process.data[1].vote_average}/10</p>
        </div>
        <div class="allDiv">
            <img src="${process.data[3].poster_path}" alt="" class="image">
            <h3 class="title">${process.data[3].original_title}</h3>
            <p class="info">${process.data[3].overview}</p>
            <p class="release">Release Date: ${process.data[3].release_date}</p>
            <p class="rate">Rating: ${process.data[3].vote_average}/10</p>
        </div>
        <div class="allDiv">
            <img src="${process.data[4].poster_path}" alt="" class="image">
            <h3 class="title">${process.data[4].original_title}</h3>
            <p class="info">${process.data[4].overview}</p>
            <p class="release">Release Date: ${process.data[4].release_date}</p>
            <p class="rate">Rating: ${process.data[4].vote_average}/10</p>
        </div>
        <div class="allDiv">
            <img src="${process.data[5].poster_path}" alt="" class="image">
            <h3 class="title">${process.data[5].original_title}</h3>
            <p class="info">${process.data[5].overview}</p>
            <p class="release">Release Date: ${process.data[5].release_date}</p>
            <p class="rate">Rating: ${process.data[5].vote_average}/10</p>
        </div>
        <div class="allDiv">
            <img src="${process.data[6].poster_path}" alt="" class="image">
            <h3 class="title">${process.data[6].original_title}</h3>
            <p class="info">${process.data[6].overview}</p>
            <p class="release">Release Date: ${process.data[6].release_date}</p>
            <p class="rate">Rating: ${process.data[6].vote_average}/10</p>
        </div>
    `

    prevBtn.addEventListener("click", async function() {
    const fetchA = await fetch(api);
    const progress = await fetchA.json();

    container.innerHTML = `
        <div class="allDiv">
            <img src="${progress.data[0].poster_path}" alt="" class="image">
            <h3 class="title">${progress.data[0].original_title}</h3>
            <p class="info">${progress.data[0].overview}</p>
            <p class="release">Release Date: ${progress.data[0].release_date}</p>
            <p class="rate">Rating: ${progress.data[0].vote_average}/10</p>
        </div>
        <div class="allDiv">
            <img src="${progress.data[1].poster_path}" alt="" class="image">
            <h3 class="title">${progress.data[1].original_title}</h3>
            <p class="info">${progress.data[1].overview}</p>
            <p class="release">Release Date: ${progress.data[1].release_date}</p>
            <p class="rate">Rating: ${progress.data[1].vote_average}/10</p>
        </div>
        <div class="allDiv">
            <img src="${progress.data[3].poster_path}" alt="" class="image">
            <h3 class="title">${progress.data[3].original_title}</h3>
            <p class="info">${progress.data[3].overview}</p>
            <p class="release">Release Date: ${progress.data[3].release_date}</p>
            <p class="rate">Rating: ${progress.data[3].vote_average}/10</p>
        </div>
        <div class="allDiv">
            <img src="${progress.data[4].poster_path}" alt="" class="image">
            <h3 class="title">${progress.data[4].original_title}</h3>
            <p class="info">${progress.data[4].overview}</p>
            <p class="release">Release Date: ${progress.data[4].release_date}</p>
            <p class="rate">Rating: ${progress.data[4].vote_average}/10</p>
        </div>
        <div class="allDiv">
            <img src="${progress.data[5].poster_path}" alt="" class="image">
            <h3 class="title">${progress.data[5].original_title}</h3>
            <p class="info">${progress.data[5].overview}</p>
            <p class="release">Release Date: ${progress.data[5].release_date}</p>
            <p class="rate">Rating: ${progress.data[5].vote_average}/10</p>
        </div>
        <div class="allDiv">
            <img src="${progress.data[6].poster_path}" alt="" class="image">
            <h3 class="title">${progress.data[6].original_title}</h3>
            <p class="info">${progress.data[6].overview}</p>
            <p class="release">Release Date: ${progress.data[6].release_date}</p>
            <p class="rate">Rating: ${progress.data[6].vote_average}/10</p>
        </div>
    `
    })

    nextBtn.addEventListener("click", async function() {
        const fetchA = await fetch(api);
        const progress = await fetchA.json();

        container.innerHTML = `
            <div class="allDiv">
                <img src="${progress.data[0].poster_path}" alt="" class="image">
                <h3 class="title">${progress.data[0].original_title}</h3>
                <p class="info">${progress.data[0].overview}</p>
                <p class="release">Release Date: ${progress.data[0].release_date}</p>
                <p class="rate">Rating: ${progress.data[0].vote_average}/10</p>
            </div>
            <div class="allDiv">
                <img src="${progress.data[1].poster_path}" alt="" class="image">
                <h3 class="title">${progress.data[1].original_title}</h3>
                <p class="info">${progress.data[1].overview}</p>
                <p class="release">Release Date: ${progress.data[1].release_date}</p>
                <p class="rate">Rating: ${progress.data[1].vote_average}/10</p>
            </div>
            <div class="allDiv">
                <img src="${progress.data[3].poster_path}" alt="" class="image">
                <h3 class="title">${progress.data[3].original_title}</h3>
                <p class="info">${progress.data[3].overview}</p>
                <p class="release">Release Date: ${progress.data[3].release_date}</p>
                <p class="rate">Rating: ${progress.data[3].vote_average}/10</p>
            </div>
            <div class="allDiv">
                <img src="${progress.data[4].poster_path}" alt="" class="image">
                <h3 class="title">${progress.data[4].original_title}</h3>
                <p class="info">${progress.data[4].overview}</p>
                <p class="release">Release Date: ${progress.data[4].release_date}</p>
                <p class="rate">Rating: ${progress.data[4].vote_average}/10</p>
            </div>
            <div class="allDiv">
                <img src="${progress.data[5].poster_path}" alt="" class="image">
                <h3 class="title">${progress.data[5].original_title}</h3>
                <p class="info">${progress.data[5].overview}</p>
                <p class="release">Release Date: ${progress.data[5].release_date}</p>
                <p class="rate">Rating: ${progress.data[5].vote_average}/10</p>
            </div>
            <div class="allDiv">
                <img src="${progress.data[6].poster_path}" alt="" class="image">
                <h3 class="title">${progress.data[6].original_title}</h3>
                <p class="info">${progress.data[6].overview}</p>
                <p class="release">Release Date: ${progress.data[6].release_date}</p>
                <p class="rate">Rating: ${progress.data[6].vote_average}/10</p>
            </div>
        `
    })

    submitBtn.addEventListener("click", async () => {
        const nameMovie = inputEl.value.toLowerCase();
        for (let i = 0; i < data.length; i++) {
            if (nameMovie === data[i].original_title.toLowerCase()) {
                container.innerHTML = ''
                container.innerHTML = `
                <img src="${data[i].poster_path}" alt="" class="image">
                <h2 class="title">${data[i].original_title}</h2>
                <p class="info">${data[i].overview}</p>
                <p class="release">Release Date: ${data[i].release_date}</p>
                <p class="rate">Rating: ${data[i].vote_average}</p>
                `
                        container.style.display = 'flex'
                        container.style.flexDirection = 'column'
                        container.style.justifyContent = 'center'
                        container.style.alignItems = 'center'
            }
        }
    })
}

getMovie()
