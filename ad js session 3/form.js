let create=()=>{
var ema= document.getElementById("email").value;
var nam= document.getElementById("name").value;
var pass= document.getElementById("password").value;

document.querySelector("#result").innerHTML+=`

<tr>
<td>${ema}</td>
<td>${nam}</td>
<td>${pass}</td>
</tr>

`
}