let navDisplay = false;

function navShow(){

    if(navDisplay === false){
        document.getElementById("nav").style.display = "inline-block";
        navDisplay = true;
        console.log("navDisplay is " + navDisplay);
    }else{
        document.getElementById("nav").style.display = "none";
        navDisplay = false;
        console.log("navDisplay is " + navDisplay);

    }
};