


// BreakingNewss.....
const loadNews = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/category/01")
    const data = await res.json();
    return data;
    // console.log(data.data);
}

const displayBreakingNews = async () => {
    const data = await loadNews();
    console.log(data)
    const findArry = data.data;
    console.log(findArry);
    const cardPart = document.getElementById('card-part');
    cardPart.textContent = '';
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
                       <label for="my-modal" class="btn modal-button">Read more</label>
                           <!-- Put this part before </body> tag -->
                           <input type="checkbox" id="my-modal" class="modal-toggle" />
                           <div class="modal">
                             <div class="modal-box">
                               <h3 class="font-bold text-lg">${element.title}</h3>
                               <p class="py-4">${element.details + "..."}</p>
                               <div class="modal-action">
                                 <label for="my-modal" class="btn">Go Back</label>
                               </div>
                               <div>
                                   <p> ${element.author.name}</p>
                                   <img class="w-6 h-4" src="${element.author.img}" alt="Movie">
                                   <P class="mx-9">${element.rating.number}M</p>

                                   </div>
                            </div>
                    </div>
                </div>
            </div> `;
        cardPart.appendChild(div)

    });
}


// Regular News.........
const loadRegularNews = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/category/02")
    const data = await res.json();
    return data;
}
const displayRegularNews = async () => {
    const data = await loadRegularNews();
    console.log(data)
    const findArry = data.data;
    console.log(findArry);
    const cardPart = document.getElementById('card-part');
    cardPart.textContent = '';
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
                           <label for="my-modal" class="btn modal-button">Read more</label>
                           <!-- Put this part before </body> tag -->
                           <input type="checkbox" id="my-modal" class="modal-toggle" />
                           <div class="modal">
                             <div class="modal-box">
                               <h3 class="font-bold text-lg">${element.title}</h3>
                               <p class="py-4">${element.details + "..."}</p>
                               <div class="modal-action">
                                 <label for="my-modal" class="btn">Go Back</label>
                               </div>
                               <div>
                                   <p> ${element.author.name}</p>
                                   <img class="w-6 h-4" src="${element.author.img}" alt="Movie">
                                   <P class="mx-9">${element.rating.number}M</p>

                                   </div>
                            </div>
                        </div>
                    </div>
                </div> `;
        cardPart.appendChild(div)

    });
}



// International news......

const loadInternationalNews = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/category/03")
    const data = await res.json();
    return data;
}

const displayInternationalNews = async () => {
    const data = await loadInternationalNews();
    const findArry = data.data;
    const cardPart = document.getElementById('card-part');
    cardPart.textContent = '';
    findArry.forEach(element => {
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
                           <<label for="my-modal" class="btn modal-button">Read more</label>
                           <!-- Put this part before </body> tag -->
                           <input type="checkbox" id="my-modal" class="modal-toggle" />
                           <div class="modal">
                             <div class="modal-box">
                               <h3 class="font-bold text-lg">${element.title}</h3>
                               <p class="py-4">${element.details + "..."}</p>
                               <div class="modal-action">
                                 <label for="my-modal" class="btn">Go Back</label>
                               </div>
                               <div>
                                   <p> ${element.author.name}</p>
                                   <img class="w-6 h-4" src="${element.author.img}" alt="Movie">
                                   <P class="mx-9">${element.rating.number}M</p>

                                   </div>
                            </div>
                        </div>
                    </div>
                </div> `;
        cardPart.appendChild(div);
    });
}



// Sports.....
const loadSportsNews = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/category/04")
    const data = await res.json();
    return data;
}

const displaySportsNews = async () => {
    const data = await loadSportsNews();
    const findArry = data.data;
    const cardPart = document.getElementById('card-part');
    cardPart.textContent = '';
    findArry.forEach(element => {
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
                           <label for="my-modal" class="btn modal-button">Read more</label>
                           <!-- Put this part before </body> tag -->
                           <input type="checkbox" id="my-modal" class="modal-toggle" />
                           <div class="modal">
                             <div class="modal-box">
                               <h3 class="font-bold text-lg">${element.title}</h3>
                               <p class="py-4">${element.details + "..."}</p>
                               <div class="modal-action">
                                 <label for="my-modal" class="btn">Go Back</label>
                               </div>
                               <div>
                                   <p> ${element.author.name}</p>
                                   <img class="w-6 h-4" src="${element.author.img}" alt="Movie">
                                   <P class="mx-9">${element.rating.number}M</p>

                                   </div>
                            </div>
                        </div>
                    </div>
                </div> `;
        cardPart.appendChild(div);
    });
}


// Entertainment.........
const loadEntertainmentNews = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/category/05")
    const data = await res.json();
    return data;
}
const displayEntertainmentNews = async () => {
    const data = await loadEntertainmentNews();
    const findArry = data.data;
    const cardPart = document.getElementById('card-part');
    cardPart.textContent = '';
    findArry.forEach(element => {
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
                           <label for="my-modal" class="btn modal-button">Read more</label>
                           <!-- Put this part before </body> tag -->
                           <input type="checkbox" id="my-modal" class="modal-toggle" />
                           <div class="modal">
                             <div class="modal-box">
                               <h3 class="font-bold text-lg">${element.title}</h3>
                               <p class="py-4">${element.details + "..."}</p>
                               <div class="modal-action">
                                 <label for="my-modal" class="btn">Go Back</label>
                               </div>
                               <div>
                                   <p> ${element.author.name}</p>
                                   <img class="w-6 h-4" src="${element.author.img}" alt="Movie">
                                   <P class="mx-9">${element.rating.number}M</p>

                                   </div>
                            </div>
                        </div>
                    </div>
                </div> `;
        cardPart.appendChild(div);
    });
}


// Culture.............
const loadCultureNews = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/category/06")
    const data = await res.json();
    return data;
}

const displayCultureNews = async () => {
    const data = await loadCultureNews();
    const findArry = data.data;
    const cardPart = document.getElementById('card-part');
    cardPart.textContent = '';
    findArry.forEach(element => {
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
                           <label for="my-modal" class="btn modal-button">Read more</label>
                           <!-- Put this part before </body> tag -->
                           <input type="checkbox" id="my-modal" class="modal-toggle" />
                           <div class="modal">
                             <div class="modal-box">
                               <h3 class="font-bold text-lg">${element.title}</h3>
                               <p class="py-4">${element.details + "..."}</p>
                               <div class="modal-action">
                                 <label for="my-modal" class="btn">Go Back</label>
                               </div>
                               <div>
                                   <p> ${element.author.name}</p>
                                   <img class="w-6 h-4" src="${element.author.img}" alt="Movie">
                                   <P class="mx-9">${element.rating.number}M</p>

                                   </div>
                            </div>

                        </div>
                    </div>
                </div> `;
        cardPart.appendChild(div);
    });
}


// Art
const loadArtNews = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/category/07")
    const data = await res.json();
    return data;
}
const displayArtNews = async () => {
    const data = await loadArtNews();
    const findArry = data.data;
    const cardPart = document.getElementById('card-part');
    cardPart.textContent = '';
    findArry.forEach(element => {
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
                           <label for="my-modal" class="btn modal-button">Read more</label>
                           <!-- Put this part before </body> tag -->
                           <input type="checkbox" id="my-modal" class="modal-toggle" />
                           <div class="modal">
                             <div class="modal-box">
                               <h3 class="font-bold text-lg">${element.title}</h3>
                               <p class="py-4">${element.details + "..."}</p>
                               <div class="modal-action">
                                 <label for="my-modal" class="btn">Go Back</label>
                               </div>
                               <div>
                                   <p> ${element.author.name}</p>
                                   <img class="w-6 h-4" src="${element.author.img}" alt="Movie">
                                   <P class="mx-9">${element.rating.number}M</p>

                                   </div>
                            </div>
                           </div>
                        </div>
                    </div>
                </div> `;
        cardPart.appendChild(div);
    });
}
// ALL news........























// // Breaking news...

// const breakingNews = async () => {
//     const data = await loadNews()
//     const findArry = data.data.news_category[0];
//     console.log(findArry);
//     // const cardPart = document.getElementById('card-part');
//     // // findArry.forEach(element => {
//     // //     // console.log(element._id)
//     // const div = document.createElement('div');
//     // div.innerHTML = `
//     //     <div class="card card-side bg-base-100 shadow-xl p-4 gap-3">
//     //         <div class="w-2/6">
//     //            <figure><img src="${findArry.image_url}" alt="Movie"></figure>
//     //          </div>
//     //         <div class="card-body w-4/6 ">
//     //             <h2 class="card-title">${findArry.title}</h2>
//     //             <p>${findArry.details + "..."}</p>
//     //             <div class="card-actions justify-end">
//     //                <div>
//     //                    <p> ${findArry.author.name}</p>
//     //                    <img class="w-6 h-4" src="${findArry.author.img}" alt="Movie">
//     //                </div>
//     //                <P class="mx-9">${findArry.rating.number}M</p>
//     //                <button class="btn btn-primary">Read More</button>
//     //             </div>
//     //         </div>
//     //     </div> `;
//     // cardPart.appendChild(div)

//     // });
// }







// const arryy = []
// const showCatagori = async () => {
//     const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
//     const data = await res.json();
//     return data

// }

// const disCatagori = async () => {
//     const data = await showCatagori();
//     const catagoriArry = data.data.news_category;
//     console.log(catagoriArry)
//     catagoriArry.forEach(elementC => {
//         console.log(elementC);
//         arryy.push(elementC)
//         console.log(arryy)
//     });
// }
// disCatagori()