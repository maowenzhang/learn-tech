var nameBuilder = (firstName = 'Lori2', lastName = "Zhang") => {
    console.log(firstName + " " + lastName);
    console.log(`Hello: ${firstName} ${lastName}!`);
};
nameBuilder();


function addBoxes(num = 45) {
    for (let i= 0; i<num; i++) {
        var div = document.createElement('div');
        div.onclick = function() {
            alert(`you are click on box: ${i}`);
        }
        var result = document.getElementsByTagName("section")[0].appendChild(div);
        result.innerText = i;
    }
 };

 var obj = {
     name : 'Lori',
     say(msg) {
         console.log(`${name} says: ${msg}!`);
     }
 };

 addBoxes(5);

 console.log('test object');
 console.log(`test object: ${obj.name}`);
 obj.say("Hello");