console.log('mainjs is connected!')


// I'll do some of the work for you, first I will grab the <body></body>
var body = document.body

// 1. Can you create a <div> with the class "duck" and store it in the variable "duck"
var duck = document.createElement('div');
duck.classList.add('duck');

document.body.appendChild(duck);

// 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
function flapper() {
    duck.classList.toggle('flap');
}
setInterval(flapper,250);

// 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"
duck.style.top = "50%";
duck.style.left = "50%";

// 4. Try making the duck move to a different location after 1 second
function moveDuck() {
    var offsetx = Math.random()*50;
    var offsety = Math.random()*50;
    duck.style.top = offsety + "%";
    duck.style.left = offsetx + "%";
    console.log("moved duck")
}
setInterval(moveDuck,1000)

// 5. Yay!!

// ======== PART 2 ===========

// 6. Things are getting a bit messy. Let's create
//    a function called createDuck() that does everything in 1-4
function createDuck

// 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
//    using our fancy new createDuck() function

// 8a. Uh oh, our ducks are overlapping.  Modify createDuck so each time
//    it creates a duck, it appears in a random location
// 8b. The ducks should also move to a random location after 1 second
// HINT: Use Math.floor(Math.random() * window.innerWidth)    for "left"
//       And Math.floor(Math.random() * window.innerHeight)   for "top"

// 9. Our ducks are going to be easy targets if they only move once.
//    Modify createDuck() so the ducks keep moving around

// 10. BOOM. Attach a click handler that adds the "shot" class to
//     the duck when you click on it!

// 11. After a duck has been clicked on, remove it from the DOM after
//     a short delay (1 second)


