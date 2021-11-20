var form= document.getElementById('addForm');
var itemList= document.getElementById('items');
var filter= document.getElementById('filter');

//Form submit event
form.addEventListener('submit',addItem);

//Delete events
itemList.addEventListener('click',removeItem);

//Filter
filter.addEventListener('keyup' ,filterItem);



//add item
function addItem(e){
    e.preventDefault();
    //get input value
    var newItem= document.getElementById('item').value;

    //Create new li element
    var li= document.createElement('li');
    //Add class
    li.className='list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button
    var deleteBtn= document.createElement('button');

    //Add classes to delete button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    
    //Append button to li
    li.appendChild(deleteBtn);
    
    //Append item to list
    itemList.appendChild(li);
    
}

//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        
    }
}

//Filter item
function filterItem(e){
    //convert to lowercase
    var text=e.target.value.toLowerCase();
    //get lits
    var items= itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        // indexOf method to find the value
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else {
            item.style.display='none';
        }
    })
}