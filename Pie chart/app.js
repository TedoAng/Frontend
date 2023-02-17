const unit = document.querySelector('.pie');

console.log(unit.getAttribute('style'));




let numb = 0;

const refreshId = setInterval(()=>{
    numb++
    unit.style = `--p:${numb};--b:10px;--c:purple`;
    console.log(numb);
    if(numb === 100) {
        clearInterval(refreshId);
    }
},300)





