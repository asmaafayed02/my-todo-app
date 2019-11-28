//define the element
let form = document.getElementById('form'),
    inputField = document.getElementById('input'),
    ulList = document.querySelector('ul'),
    massege = document.getElementById('message')
 
function todoList() {
    //check the validation
    if(inputField.value == ''){
       massege.style.display= 'block'
    }else{
        massege.style.display ='none';
        //creat list item and input checkbox
    let li = document.createElement('li'),
        checkBox = document.createElement('input');
        //put attribute id to li and type to input 
    li.setAttribute('id','listItem');
    checkBox.setAttribute('type','checkbox');
    // value of li == value of input
    li.textContent = inputField.value;
    li.appendChild(checkBox);
    //put list item inside the ul
    ulList.appendChild(li);
     //checked checkbox 
     if(checkBox.checked == 'false'){
        let liValue = li.textContent;
        liValue.style.textDecoration = 'lineThrough'
    }
      //set the value of items inside the localstorage
       localStorage.setItem(li,inputField.value);
   
}
}


//call function todolist when submit the form
form.addEventListener('submit',function(e){
    e.preventDefault();
    //remove the item when user dblclicked on it
    ulList.ondblclick = function(){
        ulList.removeChild(document.getElementById('listItem'))
    }
    todoList();

})
