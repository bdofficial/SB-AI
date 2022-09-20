//check if "name" is in localStorage
if (localStorage["name77"])
{
    var name = localStorage["name77"] ;
    name77.innerHTML=name;
}
else
{
    console.log("name not found")
}

//save entered gmail address
document.getElementById("html").addEventListener("click", function ()
    {
        var name77 = document.getElementById("name77").value ;
        //localStorage["name"] = name ;
        localStorage.setItem("name77", name77) ;
        console.log("gmail id saved")
    } , false);





//check if "name" is in localStorage
if (localStorage["birthday77"])
{
   var birthday = localStorage["birthday 77"] ;
    birthday77.innerHTML=birthday;
}
else
{
    console.log("color not found")
}

//save entered gmail address
document.getElementById("html").addEventListener("click", function ()
    {
        var birthday77 = document.getElementById("birthday77").value ;
        //localStorage["name"] = name ;
        localStorage.setItem("birthday77", birthday77) ;
        console.log("gmail id saved")
    } , false);







//check if "name" is in localStorage
if (localStorage["fc7"])
{
    var fc = localStorage["fc7"] ;
    fc7.innerHTML=fc;
}
else
{
    console.log("color not found")
}

//save entered gmail address
document.getElementById("html").addEventListener("click", function ()
    {
        var fc7 = document.getElementById("fc7").value ;
        //localStorage["name"] = name ;
        localStorage.setItem("fc7", fc7) ;
        console.log("gmail id saved")
    } , false);
