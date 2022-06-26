let arr = JSON.parse(localStorage.getItem("students")) || [];

display(arr);

function display(arr){
   console.log(arr)
   let container = document.getElementById("container")
   container.innerHTML = null;
   arr.forEach(function (el,index){
    let d1 = document.createElement("div");

    let img1 = document.createElement("img");
    img1.src = el.image;

    let n1 = document.createElement("p");
    n1.innerText = el.name;

    let c1 = document.createElement("p");
    c1.innerText = el.course;

    let u1 = document.createElement("p");
    u1.innerText = el.unit;

    let btn1 = document.createElement("button");
    btn1.innerText = "Remove"
    btn1.addEventListener("click", function(){
        remove(index);
    });

    d1.append(img1,n1,c1,u1,btn1);
    container.append(d1)
   })
}

function remove(index){
    let arr = JSON.parse(localStorage.getItem("students")) || [];
    
    let newArr = arr.filter(function (el,i){
        if(i === index)
        {
            let trash = JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(el);
            localStorage.setItem("trash", JSON.stringify(trash))
        }
        else{

            return i!==index;
        }
    });
    
    localStorage.setItem("students", JSON.stringify(newArr))
    console.log(newArr)
    display(newArr);


    
}

function calculate(){
    let arr = JSON.parse(localStorage.getItem("students")) || [];

    let obj = {};

    for(let i=0; i<arr.length; i++)
    {
        if(!obj[arr[i].batch])
        {
            obj[arr[i].batch] = 1;
        }
        else{
            obj[arr[i].batch]++;
        }
    }

    
    let nav = document.getElementById("navbar");
    for(i in obj)
    {
        nav.innerHTML+=i+" -"+obj[i]+" |"+" "


    }

    


}

calculate();