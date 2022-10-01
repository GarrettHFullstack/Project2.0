console.log("cheese")

let total = 0;
let PurchasePoints = 0;
let EventEqual = 0;
let AutoPoints = 0;
let pause = false;
let items = {
    Name : ["Milk","Milk Hustler","Milk Enhancer","Auto Milker","Milk Trailor","Milk Man","Milk Men","Milky Way"],
    Increment : [1,5,10,50,100,200,500,1000],
    Cost : [10,15,30,100,200,400,1000,2000],
    Unlock : [0,10,25,90,175,350,900,1900]
}   
    let AutoPointsKey = document.getElementsByClassName("BuyPoints")[0];
    let PurchasePointsKey = document.getElementsByClassName("BuyPoints")[1];
setInterval( function(event){
    if(total >= items.Unlock[EventEqual]){
        create(items.Name[EventEqual],items.Increment[EventEqual],items.Cost[EventEqual],items.Unlock[EventEqual])
        EventEqual++
    }
    if(pause == false){
    total = total + AutoPoints;
    PurchasePoints = PurchasePoints + AutoPoints;
    PurchasePointsKey.textContent = "Buy Points: " + PurchasePoints
    }
},1000)
function create(NameF, IncrementF, CostF){
    let Container = document.getElementsByClassName("container")[0];
    console.log(Container)
    let Contains = document.createElement("div"+EventEqual);
    Contains.className = "items"
    Container.append(Contains)
    let Contains1 = document.createElement("div");
    Contains.append(Contains1)
    Contains1.className = "title";
    Contains1.textContent = NameF;
    let Contains2 = document.createElement("div");
    Contains.append(Contains2)
    Contains2.className = "content";
    Contains2.textContent = "Add " + IncrementF +" Milk Per Second";
    let Contains3 = document.createElement("div");
    Contains.append(Contains3)
    Contains3.className = "content2";
    let Button = document.createElement("button");
    Contains3.append(Button);
    Button.textContent = "Purchase For " + CostF + " Milk";
    let PurchaseButton = document.getElementsByTagName("button")[EventEqual];
    PurchaseButton.addEventListener("click", function(Event){
        if(PurchasePoints >= CostF && pause == false){
        PurchasePoints = PurchasePoints - CostF;
        console.log("Clicker")
        console.log(CostF)
        CostF = Math.floor(CostF*2);
        PurchasePointsKey.textContent = "Buy Points: "+ PurchasePoints
        PurchaseButton.textContent = "Purchase for " + CostF + " Milk"
        AutoPoints = AutoPoints + IncrementF;
        AutoPointsKey.textContent = "Milk Per Second: " + AutoPoints
        } else if(pause == false){
            alert("HE NEED SOME MILK - to pause click on MILKY MILK MANIA")
        }
})
}
let MilkButton = document.getElementsByTagName("a")[0];
MilkButton.addEventListener("click", function(Event){
    if(pause==false){
    total++;
    PurchasePoints++;
    console.log("clicked");
    console.log(pause);
    PurchasePointsKey.textContent = "Buy Points: " + PurchasePoints
    }
})
let PauseButton = document.getElementById('Pause');
PauseButton.addEventListener('click', function(event){
    pause = !pause;
    if(pause == true){
    PauseButton.style.backgroundColor = "Red";
    }else{
        PauseButton.style.backgroundColor = "Black"; 
    }
})
