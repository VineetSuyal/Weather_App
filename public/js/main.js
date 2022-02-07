const cityName = document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn')
const city_name = document.getElementById('city_name')
const temp_real_val = document.getElementById('temp_real_val')
const temp_status = document.getElementById('temp_status')
const datahide = document.querySelector('.middle_layer')

const getInfo = async(event) =>{
    event.preventDefault()
    let cityVal = cityName.value
    if(cityVal===''){
        city_name.innerText = `Please write the city name before search.`
        datahide.classList.add('data_hide')
    }else{
        try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=af208717ae121d6419d1fca94bde06e0`
    const response =  await fetch(url)
    const data = await response.json()
    const arrData = [data]

    city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
    temp_real_val.innerText = arrData[0].main.temp;
    temp_status.innerText = arrData[0].weather[0].main
    document.querySelector('.humidity').innerText = "Humidity:" + arrData[0].main.humidity + "%"
    document.querySelector('.speed').innerText = "Speed:" + arrData[0].wind.speed + "km/h"

    const tempMood = arrData[0].weather[0].main 

    if(tempMood==='Clear'){
        temp_status.innerHTML = 
        "<i class = 'fas fa-sun' style='color : #eccc68;'></i>";
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80')"
    }
    else if(tempMood==='Clouds'){
        temp_status.innerHTML = 
        "<i class = 'fas fa-cloud' style='color : #f1f2f6;'></i>";
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=451&q=80')"
    }
    else if(tempMood==='Rain'){
        temp_status.innerHTML = 
        "<i class = 'fas fa-cloud-rain' style='color : #a4b0be;'></i>";
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1428592953211-077101b2021b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')"
    }
    else if(tempMood==='Snow'){
        temp_status.innerHTML = 
        "<i class = 'fas fa-snowman' style='color : #fff;'></i>";
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1577076498971-b4cd877524b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
    }
    else {
        temp_status.innerHTML = 
        "<i class = 'fas fa-cloud' style='color : #fff;'></i>";
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1610105245985-86265424c52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80')"

    }

    datahide.classList.remove('data_hide')

    }
    catch{
        city_name = `Please enter the city name properly`
        datahide.classList.add('data_hide')
    }
}
}

submitBtn.addEventListener('click',getInfo)