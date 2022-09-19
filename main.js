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




//check if "name" is in localStorage
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
