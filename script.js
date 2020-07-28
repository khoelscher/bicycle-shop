

// TODO ------------------------------

//Hide API
// make make button for other filter value types.
// theset buttons should utilize the new rest buttom settings so that 
// When you click it, it removes the content that is currently showing on the page. 

// Create a function that loops through the api and pushes each name to the array.
// use a for each for each item in the array and create a new html element for it. 

function myFunction() {

    fetch('https://wuoyrd-example-app.azurewebsites.net/api/Bikes')

        .then(response => response.json())
        .then(data => {

            // let bikeImg = data[0]['image'];
            // let bikeType = data[0]['name'];

            // ---------------------creat bike array from first 100 item in json

            // let imageArray = [];
            // let nameArray = [];
            //-------------------- read all items of data.
            // document.querySelector('.listing').style.visibility = "visible";  
            let roadBtn = document.querySelector('.roadBtn');
            let type = document.querySelector('.bikeType');          

            let result = [];



            for (i = 0; i < 100; i++) {


                if (data[i]['filters'][2]['filterValue'] === 'City') {

                    result.push({
                        "01": data[i]['name'],
                        "02": data[i]['image']
                    });

                }

            }


            result.forEach(function (item) {
                let p = document.createElement("p");
                let text = document.createTextNode(item['01']);
                let x = document.createElement("img");
                let div = document.createElement("div");
                div.setAttribute("class", "listX")
                x.setAttribute("src", item['02']);
                x.setAttribute("width", "300");
                x.setAttribute("height", "250");
                p.appendChild(text);

                document.querySelector('.listing').appendChild(div).appendChild(x);
                document.querySelector('.listing').appendChild(div).appendChild(p);

            });




        })
        .catch(err => console.log(err));
}

function resetAll() {
    document.querySelector('.listing').innerHTML = "";

};

// nameArray.push(data[i]['name']);
// imageArray.push(data[i]['image']);
// ---------------create html elements from varieables already set
// document.querySelector(".bikeImg").src = bikeImg;
// type.innerHTML = bikeType;


// nameArray.forEach(function (name) {
//     var p = document.createElement("p");
//     var text = document.createTextNode(name);
//     p.appendChild(text);
//     document.getElementById("myBikes").appendChild(p);
// });

// imageArray.forEach(function (imageLink) {
//     var x = document.createElement("img");
//     x.setAttribute("src", imageLink);
//     x.setAttribute("width", "304");
//     x.setAttribute("height", "228");
//     x.setAttribute("alt", "The Pulpit Rock");
//     document.getElementById('imgOfBike').appendChild(x);

// });
// data.forEach(function (item) {

//     // read all keys of item.
//   result.push(data[]['image']);
// });
// console.log(imageArray);
// console.log(nameArray);

//---------------creat a list item for each item in an array

// var array = ["slide 1", "slide 2", "slide 3", "slide 4", "slide 5"]

// array.forEach(function (item) {
//     var li = document.createElement("li");
//     var text = document.createTextNode(item);
//     li.appendChild(text);
//     document.getElementById("myUl").appendChild(li);
// });




// var button = document.querySelector('.weatherSubmit');
// var city = document.querySelector('.cityInput');
// var userCity = document.querySelector('.displayCity');
// var temp = document.querySelector('.displayTemp');
// var desc = document.querySelector('.displayDesc');
// var img = document.getElementById('weatherIcon');


// // CAPTIALIZE FIRST CHARACTER OF STRING-------------
// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// // CALL API ON SUBMIT CLICK-------------------------
// button.addEventListener('click', function (name) {
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&units=imperial&appid=a2e114cdb60f2f87e8096d408c845afd')

//         // TURN RESPONSE TO JSON AND RETRIEVE DATA----------
//         .then(response => response.json())
//         .then(data => {
//             var tempValue = data['main']['temp'];
//             var nameValue = data['name'];
//             var descValue = data['weather'][0]['description'];
//             var icon = data['weather'][0]['icon'];

//             // TURN TEMP TO ROUND NUMBER-----------------------
//             var roundTemp = Math.floor(tempValue);

//             var upperDesc = capitalize(descValue);
//             // CHANGE HTML WITH DATA INFO----------------------
//             userCity.innerHTML = nameValue;
//             temp.innerHTML = roundTemp + "°";
//             desc.innerHTML = upperDesc;
//             img.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
//         })

//         .catch(err => console.log(err));
// })