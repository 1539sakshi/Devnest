// onclick
function clickevent()
	{
		document.write("My name is Sakshi Singh");
	}

// onfocus
  function focusevent()  
  {  
      document.getElementById("input1").style.background=" aqua";  
  }  
 
// onkeydown
  function keydownevent()  
  {  
      document.getElementById("input1");  
      alert("You have pressed a key");  
  }  

  // onmouseover
  function mouseoverevent()
	{
		alert("This alert will ocur on hovering");
	}


  //drag and drop
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }
    
