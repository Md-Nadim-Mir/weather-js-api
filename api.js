



let input_field = document.getElementById('input-field');
let search_btn = document.getElementById('search-btn');
let result = document.getElementById('result');



weatherApi = (() => {

    let city = input_field.value;


    // no city is input

    if (city.length == 0) {

        result.innerHTML = `<h1 class="pt-2 text-3xl font-bold text-white">Please enter the city.</h1>`

    }


    // city is input

    else {

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

        fetch(url)
            .then(res => res.json())
            .then(data =>{

                // console.log(data);
                // console.log(data.name);


                result.innerHTML=`
                
                <p class="pt-4 text-4xl font-bold text-white">${data.name}</p>
                <p class="pt-2 text-2xl font-bold text-white">${data.weather[0].main}</p>
                <p class="pt-2 text-4xl font-bold text-white">${data.weather[0].description}</p>
                
                <div class="flex justify-center text-4xl font-bold text-white">

                <img  src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
                  
                </div>
              
                <p class="pt-2 text-xl font-bold text-white">Wind Speed: ${data.wind.speed} atm</p>

                <p class="pt-2 text-5xl font-bold text-white"> ${data.main.temp} &#176</p>

               


                 <div class="flex justify-center gap-3 pt-4 ">

                        <div class="border-r-4 border-[black] pr-8 ">
                              
                                <p class="pt-2 text-xl font-bold text-white">MIN</p>
                                <p class="pt-2 text-base font-bold text-white"> ${data.main.temp_min} &#176 </p>

                        </div>


                        <div class="pl-8">

                                <p class="pt-2 text-xl font-bold text-white">MAX</p>
                                <p class="pt-2 text-base font-bold text-white"> ${data.main.temp_max} &#176</p>

                        </div>

                 </div>
                
                
                `

               
            })

            

            // no city is found from input value basis

            .catch(() => {

                result.innerHTML = ` <h1 class="pt-2 text-3xl font-bold text-white">No city is found.</h1>`

            })
    }



})


// serach button add evenlistener add 

search_btn.addEventListener('click',weatherApi)


//   direct call 
window.addEventListener('load', weatherApi);