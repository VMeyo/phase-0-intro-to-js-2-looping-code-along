// Code your solutions in this file
const gifts = ["IPhone 15PromMax", "Samsung S20", "Tecno Latest"]

function wrapGifts(gifts){
    for( i = 0; i < gifts.length; i++ ){
        console.log(`I wrapped ${gifts[i]} plus and extra 1TB Memory card!`);
        debugger;
    }
return gifts;
}

wrapGifts(gifts);

//Start of Write Cards

const names = ["Guadalup", "Ollie", "Aki"];

const event = ["Birthday", "Easter", "Christmas"];

function writeCards(names, event){
    
    

    let message = [];

    for( let i = 0; i < names.length; i++ ){
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        debugger;
    }
    return message;
}
writeCards(names, event);

//End of Write Cards

//Start of Count Down
 const number = 10;

 function countDown(number){
    for( let i = number; i >= 0; i-- ){
        console.log(i);
        debugger;
    }
    return countDown;
 }