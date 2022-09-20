//check if "name" is in localStorage
if (localStorage["name77"])
{
    var name = localStorage["name77"] ;
    name77.innerHTML=name;
}
else
{
    document.getElementById("name77").placeholder = " " ;
    console.log("name no found in localStorage")
}

//save entered gmail address
document.getElementById("html").addEventListener("click", function ()
    {
        var name77 = document.getElementById("name77").value ;
        //localStorage["name"] = name ;
        localStorage.setItem("name77", name77) ;
        console.log("gmail id saved")
    } , false);
