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
        // console.log(element._id)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl p-4 gap-3">
            <div class="w-2/6">
               <figure><img src="${element.image_url}" alt="Movie"></figure>
             </div>
            <div class="card-body w-4/6 ">
                <h2 class="card-title">${element.title}</h2>
                <p>${element.details + "..."}</p>
                <div class="card-actions justify-end">
                   <div>
                       <p> ${element.author.name}</p>
                       <img class="w-6 h-4" src="${element.author.img}" alt="Movie">
                   </div>
                   <P class="mx-9">${element.rating.number}M</p>
                   <button class="btn btn-primary">Read More</button>
                </div>
            </div>
        </div> `;
        cardPart.appendChild(div)

    });
}        