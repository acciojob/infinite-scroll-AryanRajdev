//your code here!
let list = document.getElementById("infi-list");

function addItems(count) {
	for(let i =0 ; i<10 ; i++){
	   let li = document.createElement("li");
	   li.textContent = `item-${list.children.length+1}`;
	   list.appendChild(li);
  }	
}

addItems(10);

list.addEventListener("scroll",()=>{
	if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
            addItems(2); // Add 2 more items when reaching the bottom
        }
});

