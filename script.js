function getSubmit(){
    const input = document.querySelectorAll("input");
    var bool='true';
    for(let i=0;i<input.length;i++){
        console.log(i,isEmpty(input[i].value))
        if(i===2){
            if(!isEmail(input[i].value)){
                console.log('invalid')
                false_input(i);
                bool="false";
            }
            else{
                true_input(i);
                bool = "true";
            }
        }
        else{
            if (!isEmpty(input[i].value)) {
                console.log('false')
                false_input(i);
                bool = "false";
            }
            else {
                true_input(i);
                bool = "true";
            }
        }
    }
    for (let i = 0; i < input.length; i++) {
        console.log(i, isEmpty(input[i].value))
        if (i === 2) {
            if (isEmail(input[i].value)) {
                bool="true"
            }
            else {
                bool = "false";
                break;
            }
        }
        else {
            if (isEmpty(input[i].value)) {
                bool = "true";
            }
            else {
                bool = "false";
                break;
            }
        }
    }
    console.log(bool)
    if(bool=='true'){
        for(let i=0;i<input.length;i++){
            input[i].value="";
        }
    }
}


function isEmpty(str){
    return (str!=="");
}

function isEmail(str){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return (str.match(mailformat));
}

function true_input(i){
    document.getElementById(`error${i}`).style.display = "none";
    document.getElementById(`input${i}`).style.border = "1px solid #B9B6D3";
    document.getElementById(`icon${i}`).style.display = "none";
}

function false_input(i) {
    document.getElementById(`error${i}`).style.display = "block";
    document.getElementById(`icon${i}`).style.display = "block";
    document.getElementById(`input${i}`).style.border = " 2px solid hsl(0, 100%, 74%)";
}