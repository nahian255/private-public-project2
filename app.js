// const tittalePart = [];

const loadNews = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json();
    // return data;
    console.log(data.data.news_category);
}
loadNews()
// const displayAll = async () => {
//     const data = await loadNews()
//     console.log(data)
//     // const cardPart = document.getElementById('card-part');
//     // const div = document.createElement('div');
//     // div.innerHTML = `
//     // <div class="card lg:card-side bg-base-100 shadow-xl">
//     //    <figure><img src="https://placeimg.com/400/400/arch" alt="Album"></figure>
//     //    <div class="card-body">
//     //         <h2 class="card-title">New album is released!</h2>
//     //         <p>Click the button to listen on Spotiwhy app.</p>
//     //         <div class="card-actions justify-end">
//     //          <button class="btn btn-primary">Listen</button>
//     //         </div>
//     //     </div>
//     //  </div>
//     // `;
//     // cardPart.appendChild(div)

//     //     data.data.news_category.forEach(catagori => {
//     //         console.log(catagori);
//     //     });
// }


// // document.getElementById('home').addEventListener('click', async (event){
// //     const data = await loadNews();
// //     // console.log(data);
// // })

console.log(5274547)