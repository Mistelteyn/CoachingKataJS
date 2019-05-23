let ElementalCat1 = {name:"Yui",element:"Fire",};
console.log(ElementalCat1); // {name: "Yui", element: "Fire"}
let ElementalCat2 = ElementalCat1;
console.log(ElementalCat2); // {name: "Yui", element: "Fire"}
ElementalCat1.element = "Water"
console.log(ElementalCat1); // {name: "Yui", element: "Water"}

console.log(ElementalCat2); // {name: "Yui", element: "Water"}

ElementalCat2 = JSON.parse(JSON.stringify(ElementalCat1));
ElementalCat1.element = "Wind";
console.log(ElementalCat1); // {name: "Yui", element: "Wind"}
console.log(ElementalCat2); // {name: "Yui", element: "Water"}