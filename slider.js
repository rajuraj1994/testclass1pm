const img_array=['a.jpg','b.jpg','c.jpg','d.jpg','e.jpg']
const array_length= img_array.length 
let i=0
let set = setInterval(sliderFunction,5000)
//here, sliderFunction is a user define function
// 5000 -> 5 seconds

function sliderFunction(){
    i++ 
    i=i%array_length
    //i=0%5=0
    //i=1%5=1
    //i=2%5=2
    //i=3%5=3
    //4%5=4
    //i=5%5=0
    document.getElementById('image').src=`images/${img_array[i]}`
}

function next(){
    i++
    i=i%array_length
    document.getElementById('image').src=`images/${img_array[i]}`
}

function prev(){
    i-- 
    if(i<0){
        i=array_length-1
    }
    document.getElementById('image').src=`images/${img_array[i]}`
}

function stops(){
    clearInterval(set)
}

function starts(){
    set=setInterval(sliderFunction,5000)
}