console.log("If you can see this, your JavaScript is connected.")

const ducks = [
    {
        color: "white",
        isRubber: true,
        gender: "female",
        isMigratory: false,
        socialStatus: "ready to mingle",
        diet: "vegan",
        age: 26,
        featherNumber: 0,
        name: "Lucy",
        image:"https://images-na.ssl-images-amazon.com/images/I/41G1Em65JbL._AC_SY355_.jpg"
    },

    {
        color: "blue",
        isRubber: true,
        gender: "male",
        isMigratory: false,
        socialStatus: "reclus",
        diet: "meat eater",
        age: 68,
        featherNumber: 0,
        name: "Jimbo",
        image:"data:image/jpeg;base64,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"
    },

    {
        color: "green",
        isRubber: true,
        gender: "male",
        isMigratory: true,
        socialStatus: "social",
        diet: "bread",
        age: 39,
        featherNumber: 0,
        name: "Tim",
        image:"https://images-na.ssl-images-amazon.com/images/I/71R6AVoUMzL._AC_SL1500_.jpg"
    }, 

    {
        color: "white",
        isRubber: false,
        gender: "female",
        isMigratory: false,
        socialStatus: "independant",
        diet: "candy",
        age: 79,
        featherNumber: 426,
        name: "Cindy",
        image:"http://www.duckshop.com/shop_cfg/rubberducks/IMG_4623.JPG"
    },
    
    {
        color: "green",
        isRubber: false,
        gender: "female",
        isMigratory: false,
        socialStatus: "no friends",
        diet: "leaves",
        age: 25,
        featherNumber: 390,
        name: "Amanda",
        image:"http://www.duckshop.com/shop_cfg/rubberducks/01-img_2677.jpg"
    }, 

    {
        color: "blue",
        isRubber: true,
        gender: "male",
        isMigratory: true,
        socialStatus: "lonley",
        diet: "snacks",
        age: 50,
        featherNumber: 0,
        name: "Bruce",
        image:"hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWcCu-IBL5X9Uj7tvjZKTKdnb19xVeyeo1J-63_yWipeYb_Qnv&s"
    },

    {
        color: "white",
        isRubber: true,
        gender: "male",
        isMigratory: true,
        socialStatus: "party animal",
        diet: "drinks",
        age: 21,
        featherNumber: 0,
        name: "Lenny",
        image:"https://i.ebayimg.com/images/g/Xl8AAOSw19dcjVvA/s-l300.jpg"
    },

    {
        color: "white",
        isRubber: false,
        gender: "male",
        isMigratory: false,
        socialStatus: "pack leader",
        diet: "flies",
        age: 29,
        featherNumber: 529,
        name: "Bob",
        image:"http://www.duck-shop.co.uk/shop_cfg/rubberduck/Badeente5631.JPG"
    },
]



console.log(ducks)


//print to DOM function
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};


const buildDuckCards = (quacks) => {
    let domString = "";
    for(i = 0; i < quacks.length; i++) {
    domString += `<div class="col-md-6 col-lg-4">`;
    domString += `<div class="card">`;
    domString += `<h1 class="Name:">${quacks[i].name}`;
    domString += `<img src="${quacks[i].image}" class="card-img-top" alt="...">`;
    domString += `<div class="card-body ">`;
    domString += `<h5 class="Age:">${quacks[i].age}`;
    domString += `<h5 class="Is Rubber?">${"Is Rubber? "}${quacks[i].isRubber}`;
    domString += `<h5 class="Gender:">${"Gender: "}${quacks[i].gender}`;
    domString += `<h5 class="Is Migratory?">${"Do I migrate? "}${quacks[i].isMigratory}`;
    domString += `<h5 class="Social Status:">${"Social Status: "}${quacks[i].socialStatus}`;
    domString += `<h5 class="Diet:">${"Diet: "}${quacks[i].diet}`;
    domString += `<h5 class="Feather Number:">${quacks[i].featherNumber}`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
};
printToDom("printDuckNamesHere", domString);
};


const init = () => {
    buildDuckCards(ducks);
};

init();