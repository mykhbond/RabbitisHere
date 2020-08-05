console.log("hello world");


function getSelectValue(){
    let select = document.getElementById("select");
    let value = select.value;

    if(value==="1"){
        // console.log(1);

    }else if(value==="2"){
        // console.log(2);
    }
    setOrangeBState(value);
}
function setOrangeBState(state){
    let text=document.getElementById("orangeT");
    if(state==="1"){
        text.style.display="inline-block";
    }else if(state==="2"){
        text.style.display="none";
    }



}