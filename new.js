const loadNews = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/category/01")
    const data = await res.json();
    return data;
    // console.log(data.data);
}
loadNews()

const displayAll = async () => {
    const data = await loadNews()
    const findArry = data.data;
    console.log(findArry);
    const cardPart = document.getElementById('card-part');
    findArry.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"></figure>
        <div class="card-body">
          <h2 class="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
            `;
        cardPart.appendChild(div)

    });
}        