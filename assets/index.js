
let formInfo=document.querySelector("#shedproductionform");
let shedA = 0;
let shedB = 0;
let shedC = 0;
let shedD = 0;

const brooksideSellingPrice=45;
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

formInfo.addEventListener("submit", (e)=> {
    shedA = parseInt(formInfo.elements["shedA"].value);
    shedB = parseInt(formInfo.elements["shedB"].value);
    shedC = parseInt(formInfo.elements["shedC"].value);
    shedD = parseInt(formInfo.elements["shedD"].value);

    let totalMilkProduction = shedA + shedB + shedC + shedD;

    let myInnerHTML= `
    <textarea name="totalProduction" id="totalProduction" cols="30" rows="5">You have recorded ${totalMilkProduction}  litres</textarea>

</div`
