//Get all the countries from Asia continent /region using Filter function

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
    var Data=JSON.parse(this.response);
    const asia=Data.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
    console.log(asia);}
//Get all the countries with population of less than 2 lacs using Filter function

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
    var Data=JSON.parse(this.response);
    const popu=Data.filter((element)=>{
        return element.population<200000;
    })
    console.log(popu);}

//Print the following details name, capital, flag using forEach function.

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
    var Data=JSON.parse(this.response);
    Data.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })}

//Print the total population of countries using reduce function 


var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
    var Data=JSON.parse(this.response);
    const population=Data.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(population);}

//Print the country which use US Dollars as currency.

var request = new XMLHttpRequest();
request.open('Get', 'https://restcountries.com/v3.1/all', true)
request.send();
request.onload = function () {
         var data = JSON.parse(this.response);
    
    data.filter((element)=>{
        for(let key in element.currencies){
            if(element.currencies[key].code="USD"){
                console.log(element.name)
            }
        }
    })
}