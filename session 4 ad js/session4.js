let create=()=>{
    document.getElementById("btnupdate").style.display="none";
    document.getElementById("btn1").style.display="block";
    var ema= document.getElementById("email").value;
    var nam= document.getElementById("name").value;
    var pass= document.getElementById("password").value;
    
    document.querySelector("#result").innerHTML+=`
    
    <tr>
    <td>${ema}</td>
    <td>${nam}</td>
    <td>${pass}</td>
    <td>
    <button class="btn btn-primary" onclick="edit(this)">Edit</button>
    <button class="btn btn-primary" onclick="delete2()">Delete</button>
    </td>
   
    </tr>
    
    `

    
    document.getElementById("email").value="";
    document.getElementById("name").value="";
    document.getElementById("password").value="";
    }



    let delete2=(index)=> document.getElementById("result").deleteRow(this);

    function edit(td) {
        document.getElementById("btnupdate").style.display="block";
        document.getElementById("btn1").style.display="none";
        selectedrow=td.parentElement.parentElement;
        document.getElementById("name").value=selectedrow.cells[0].innerHTML;
        document.getElementById("email").value=selectedrow.cells[1].innerHTML;
        document.getElementById("password").value=selectedrow.cells[2].innerHTML;
        

    }

    function update() {
        document.getElementById("btnupdate").style.display="none";
        document.getElementById("btn1").style.display="block";
        selectedrow.cells[0].innerHTML=document.getElementById("email").value;
        selectedrow.cells[1].innerHTML=document.getElementById("password").value;
        selectedrow.cells[2].innerHTML=document.getElementById("name").value;
        
    document.getElementById("email").value="";
    document.getElementById("name").value="";
    document.getElementById("password").value="";
    }

