//check if "name" is in localStorage
if (localStorage["name"])
{
    var name = localStorage["name"] ;
    document.getElementById("name").value = name ;
}
else
{
    document.getElementById("name").placeholder = " " ;
    console.log("name no found in localStorage")
}

//save entered gmail address
document.getElementById("name").addEventListener("input", function ()
    {
        var name = document.getElementById("name").value ;
        //localStorage["name"] = name ;
        localStorage.setItem("name", name) ;
        console.log("gmail id saved")
    } , false);




//check if "birthday" is in localStorage
if (localStorage["birthday"])
{
    var name = localStorage["birthday"] ;
    document.getElementById("birthday").value = name ;
}
else
{
    document.getElementById("birthday").placeholder = " " ;
    console.log("name no found in localStorage")
}
//save entered gmail address
document.getElementById("birthday").addEventListener("input", function ()
    {
        var name = document.getElementById("birthday").value ;
        //localStorage["name"] = name ;
        localStorage.setItem("birthday", name) ;
        console.log("gmail id saved")
    } , false);






//check if "blood group" is in localStorage
if (localStorage["bg"])
{
    var name = localStorage["bg"] ;
    document.getElementById("bg").value = name ;
}
else
{
    document.getElementById("bg").placeholder = " " ;
    console.log("name no found in localStorage")
}
//save entered gmail address
document.getElementById("bg").addEventListener("input", function ()
    {
        var name = document.getElementById("bg").value ;
        //localStorage["name"] = name ;
        localStorage.setItem("bg", name) ;
        console.log("gmail id saved")
    } , false);



//check if "favorite color" is in localStorage
if (localStorage["fc"])
{
    var name = localStorage["fc"] ;
    document.getElementById("fc").value = name ;
}
else
{
    document.getElementById("fc").placeholder = " " ;
    console.log("name no found in localStorage")
}
//save entered gmail address
document.getElementById("fc").addEventListener("input", function ()
    {
        var name = document.getElementById("fc").value ;
        //localStorage["name"] = name ;
        localStorage.setItem("fc", name) ;
        console.log("gmail id saved")
    } , false);




//check if "how are you" is in localStorage
if (localStorage["hay"])
{
    var name = localStorage["hay"] ;
    document.getElementById("hay").value = name ;
}
else
{
    document.getElementById("hay").placeholder = " " ;
    console.log("name no found in localStorage")
}
//save entered gmail address
document.getElementById("hay").addEventListener("input", function ()
    {
        var name = document.getElementById("hay").value ;
        //localStorage["name"] = name ;
        localStorage.setItem("hay", name) ;
        console.log("gmail id saved")
    } , false);
