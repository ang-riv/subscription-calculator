// Your JS code here
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months"); 
var result = document.querySelector(".result"); 
var subType = "basic";
var subDuration = 1;

subTypeElement.addEventListener("change", function(e){
    subType = e.target.value;
    // testing for the value of the type of subscription
    //console.log(subType);
});

subDurationElement.addEventListener("change", function (e) {
    subDuration = Number(e.target.value);
    // this number comes from the OPTION VALUE in the html
    console.log(subDuration);
})