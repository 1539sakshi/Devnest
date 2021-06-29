function AddElement() {
  var li = document.createElement("li");
  let input = document.getElementById("input").value;
  var text1= document.createTextNode(input);
  li.appendChild(text1);

  if (input === '') {
    alert("You haven't written anything \n please write something!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("input").value = "";
  
  
  var span = document.createElement("span");
  var text2 = document.createTextNode("\u274E");
  span.className = "cross";
  span.appendChild(text2);
  li.appendChild(span);


  var cross = document.getElementsByClassName("cross");
  for (let i = 0; i < cross.length; i++) {
    cross[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}
