//define the element
let form = document.getElementById('form'),
    inputField = document.getElementById('input'),
    ulList = document.querySelector('ul'),
    massege = document.getElementById('message'),
    todoArray = [];
   // trashIcon 
 
function todoList() {
    //check the validation
    if(inputField.value == ''){
       massege.style.display= 'block'
    }else{
        massege.style.display ='none';
        //creat list item and input checkbox asd deleteicon and its button
    let li = document.createElement('li'),
        checkBox = document.createElement('input'),
        trashIcon = document.createElement('i'),
        deleteButton = document.createElement('button');
        //put attribute id to li and type to input 
    li.setAttribute('id','listItem');
    checkBox.setAttribute('type','checkbox');
    //set the icon and the id of delete button
    trashIcon.setAttribute('class','fas fa-trash');
    deleteButton.setAttribute('id','trash');
    //appand trashicon to button
    deleteButton.appendChild(trashIcon)
    // value of li == value of input
    li.textContent = inputField.value;
    li.appendChild(checkBox);
    li.appendChild(deleteButton);
    //put list item inside the ul
    ulList.appendChild(li);
    //clear the input field
    inputField.value='';
     //checked checkbox 
     checkBox.onclick = function(){
         if(checkBox.checked == true){
         li.setAttribute('class','check')
         }else{
             li.classList.remove('check')
         }
     }
      //set the value of items inside the localstorage
      //  var ourRequest = new XMLHttpRequest();
     //ourRequest.open('GET','/article/xmlhttprequest/example/load')
     // ourRequest.onload = function(){
        //for(i=0; i<todoArray.length;i++){
            //    ulList.innerHTML = JSON.parse(localStorage.getItem('myli'))  
          // } 
     //}
     //ourRequest.send()

      let liObj = {'li': li.value,'checkBox': checkBox,'deleteButton':checkBox};
      todoArray.push(liObj)
      let localValue = JSON.stringify(todoArray);
      localStorage.setItem('myli',localValue)
      
       
   //remove the item when user dblclicked on deleltbutton
       deleteButton.onclick = function(){
            ulList.removeChild(li);
       }
}}
//call function todolist when submit the form
form.addEventListener('submit',function(e){
    e.preventDefault();
  
    todoList();
   
})
