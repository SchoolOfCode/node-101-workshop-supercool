let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
  ];

  console.log(myCollection.name)
    

// the funciton will take in an item (NAME) from the list
// console.log a message if there are more than 1
//      if only one item, say...
//      else say...
// 'i have a NAME heres what I like about it: WHATILIKE'
function describeItem(item){
    if (item.count > 1){
        return console.log (`I have a ${item}. Here's what I like about it: ${whatILike}`)
            } else {
        return console.log (`I have ${item.count} ${item}s. Here's what I like about them: ${whatILike}`)
    }
}