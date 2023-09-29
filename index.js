// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);

  }

  return gifts;
}

wrapGifts(gifts);
const names=["Guadalupe", "Ollie", "Aki"];
writeCards(names,"surprise");
function writeCards(names, eventName)
{
    const msg=[];
for (let i=0;i<names.length;i++)
{
    //console.log(`Thank you, ${names[i]} for the wonderful ${eventName} gift!`)
    msg.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);

}
return msg;

}
countDown(10);
function countDown(num)
{
while (num!=-1)
{
    console.log(num);
    num--;
}
}