
let arr = JSON.parse(localStorage.getItem("students")) || [];


function getData(event) {
    event.preventDefault();

    let form = document.getElementById("form");

    let name = form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let image = form.image.value;
    let batch = form.batch.value;

    let s1 = new student(name,course,unit,image,batch);
    arr.push(s1);

    localStorage.setItem("students", JSON.stringify(arr));
    // console.log(s1)

    form.reset();
}


function student(n,c,u,i,b){
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = `Ft-web${b}`
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
