document.addEventListener('DOMContentLoaded', function(){
    fetchEstado = () =>{
     url = "https://raw.githubusercontent.com/martinciscap/json-estados-municipios-mexico/master/estados.json"
     fetch(url)
        .then(response => response.json())
        .then(data =>{
            let select = '<label for="state">Estado</label><select name="state" id="state" onchange="selectMuni()" required> <option value="">Estado<option>' ;
            data.forEach(state => {
                select += `<option value="${state.nombre}">${state.nombre}<option>`
            });
            select += '</select>'
            document.getElementById("select-state").innerHTML = select;
        })
    }
    fetchEstado()
})

function selectMuni() {
    state = document.getElementById('state').value
    lowerState = state.toLowerCase()
    const arr = lowerState.split(" ");
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] == 'de'){

        } else{
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
    }
    const capilizeState = arr.join(" ");
    console.log(capilizeState)
    url = "https://raw.githubusercontent.com/martinciscap/json-estados-municipios-mexico/master/estados-municipios.json"
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data[capilizeState])
            let muniArray = data[capilizeState]
            select = ""
            for(let i = 0; i < muniArray.length; i++){
                select += `<option value="${muniArray[i]}">${muniArray[i]}<option>`
            }
            document.getElementById("city").innerHTML = select;
        })
}
