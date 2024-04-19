let str:string="hello world banana check";
let arr=str.split(' ');
let listWord:number[]=[];
for(let btn of arr){
    let check:boolean=true;
    for(let i=0;i<btn.length-1;i++){
        for(let j=i+1;j<btn.length;j++){
            if(btn[i]===btn[j]){
                check=false;
                break;
            }
        }
       
    }
    if(check){
    listWord.push(btn.length);
    }
}
console.log(Math.max(...listWord))
