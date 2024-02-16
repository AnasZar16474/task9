const button=document.querySelectorAll("button");
const numbers=document.querySelectorAll("p");
let int=[]
for(let i=0;i<numbers.length;i++){
    let anas=parseInt(numbers[i].textContent);
    int.push(anas)
}
for(let i=0;i<button.length;i++){
button[i].onclick=function(){
     int[i]+=1
     numbers[i].textContent=int[i];
}
}