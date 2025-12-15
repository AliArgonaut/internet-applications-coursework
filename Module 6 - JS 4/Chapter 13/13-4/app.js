
function createCanvas() 
{
  var side = 100;
  var tbody = document.getElementById("tablebody");

  for (var i = 0; i < side; ++i) 
  {
    var row = document.createElement("tr"); 
    for (var j = 0; j < side; ++j) 
    {
      var cell = document.createElement("td");
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }

  document.getElementById("canvas").addEventListener
  (
    "mousemove", processMouseMove, false
  );
  button = document.getElementById("clearBtn")
  button.addEventListener("click",clearScreen)
 
}

function processMouseMove(e) 
{
  if (e.target.tagName.toLowerCase() === "td") 
  {
    if (e.ctrlKey) 
    {
      e.target.className = "blue"; 
    } else if (e.shiftKey) 
    {
      e.target.className = "red";
    } else if (e.altKey) 
    {
      e.target.className = "white"; 
    }
  }
}

function clearScreen(){
  const cells = document.querySelectorAll("#tablebody td")
  cells.forEach(cell => cell.className="white")
}
window.addEventListener("load", createCanvas, false);

