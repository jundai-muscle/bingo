'use strict';
const animation=document.getElementById('check');
animation.addEventListener('change',()=>{
    if(animation.checked===true){
        document.getElementById('onoff').textContent=" on";
    }else{
        document.getElementById('onoff').textContent=" off";
    }
});

function setAnimation(){
    function num(){
        let  m=Math.floor(Math.random()*Math.floor(75));
        document.getElementById('disnum').textContent=m;
    }
    return new Promise(resolve=>{
        let set=setInterval(num,10);
        setTimeout(()=>{
            resolve(clearInterval(set));
        },500);
        
    })
}
async function addAinmation(res){
    console.log(res)
    const anime=await setAnimation();
    let id="ball-"+res[0];
    //let n=document.getElementById(id);
    //let d=document.getElementById('disnum');
    document.getElementById(id).textContent=res[0];
    document.getElementById('disnum').textContent=res[0];
    console.log(res[0]);
    return;

}



function reset(){
    function resetnum(){
        for(let i=1;i<=75;i++){
            document.getElementById('ball-'+i).textContent="";
        }
        document.getElementById('disnum').textContent="";
    }
    return new Promise(resolve=>{
        resolve(resetnum());
    })
}


const ngButton=document.getElementById("new-game");
const nxButton=document.getElementById("next-ball");
nxButton.disabled=true;

let res;
ngButton.addEventListener('click',()=>{generateBingo()
.then(v=>{res=v})
.then(()=>{nxButton.disabled=false;})
.catch(()=>{ngButton.disabled=true;})
.finally(async ()=>{await reset();})});

nxButton.addEventListener('click',()=>{
    let id="ball-"+res[0];
    let num=document.getElementById(id);
    let dis=document.getElementById('disnum');
    ngButton.disabled=true;
    nxButton.disabled=true;
    if (animation.checked){
        //console.log(1);
        addAinmation(res)
        .then(()=>{ngButton.disabled=false;
        nxButton.disabled=false;
        res.splice(0,1);})
    }else{
        dis.textContent=res[0];
        num.textContent=res[0];
        ngButton.disabled=false;
        nxButton.disabled=false;
        res.splice(0,1);
    }
    if(res.length===0){
         nxButton.disabled=true;
    }
})

/*
if(res!==75){
    ngButton.addEventListener('click',()=>{
        document.getElementsByClassName('b').t
    })
}
*/