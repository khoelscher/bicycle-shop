// TODO ------------------------------

// Refactor. Try to make it a bit more DRY


function resetAll() {
    document.querySelector('.listing').innerHTML = "";
};




function cityBikes() {
    resetAll();

    fetch('https://wuoyrd-example-app.azurewebsites.net/api/Bikes')

        .then(response => response.json())
        .then(data => {

            let roadBtn = document.querySelector('.cityBtn');
            let type = document.querySelector('.bikeType');

            let result = [];



            for (i = 0; i < 200; i++) {

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
                p.appendChild(text);

                document.querySelector('.listing').appendChild(div).appendChild(x);
                document.querySelector('.listing').appendChild(div).appendChild(p);

            });




        })
        .catch(err => console.log(err));
}

function trailBikes() {
    resetAll();

    fetch('https://wuoyrd-example-app.azurewebsites.net/api/Bikes')

        .then(response => response.json())
        .then(data => {

            let roadBtn = document.querySelector('.trailBtn');
            let type = document.querySelector('.bikeType');

            let result = [];



            for (i = 0; i < 200; i++) {

                if (data[i]['filters'][2]['filterValue'] === 'Trail') {
                    
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


