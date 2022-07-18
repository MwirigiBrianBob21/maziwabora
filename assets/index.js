// let formData = document.querySelector('#my-form');

// let myNumber1 = 0;
// let myNumber2 = 0;
// let myNumber3 = 0;

// formData.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     myNumber1 = parseInt(formData.elements['my-number'].value);
//     myNumber2 = parseInt(formData.elements['my-number-2'].value);
//     myNumber3 = parseInt(formData.elements['my-number-3'].value);

//     let total = myNumber1 + myNumber2 + myNumber3;

//     let myName = "My Name"
//     let myInnerHTML = `    <div>
//     The total value is <strong>${myName}</strong> 
// </div>
// `
//     let bodyStuff = document.querySelector('body');

//     bodyStuff.innerHTML += myInnerHTML;
    
// });


let formInfo=document.querySelector("#shedproductionform");
let shedA = 0;
let shedB = 0;
let shedC = 0;
let shedD = 0;

const brooksideSellingPrice=45;
// adding months as the input
var months={
    january: 31,
    february: 28,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31
}


var totalProduction= function(brooksideSellingPrice, time);
    

formInfo.addEventListener("submit", (e)=> {
    e.preventDefault();
    shedA = parseInt(formInfo.elements["shedA"].value);
    shedB = parseInt(formInfo.elements["shedB"].value);
    shedC = parseInt(formInfo.elements["shedC"].value);
    shedD = parseInt(formInfo.elements["shedD"].value);

    let totalMilkProduction = shedA + shedB + shedC + shedD;

    
    
    let myInnerHTML= `
    <textarea name="totalProduction" id="totalProduction" cols="30" rows="5">You have recorded ${totalMilkProduction}  litres</textarea>

</div`
let bodyContent=document.querySelector('body');
bodyContent.innerHTML += myInnerHTML;
});


