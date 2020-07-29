var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");

input.addEventListener("keypress",function(keyPressed){
    if(keyPressed.which === 13){
        var li = document.createElement("li");
        var spanElement = document.createElement("span");
        var icon = document.createElement("i");

        var newTodo = this.value;
        this.value = " " ;

        icon.classList.add('fas', 'fa-trash-alt');
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement,newTodo);

        deleteTodo();

    }
});

function deleteTodo(){
    for(let span of spans){
        span.addEventListener ("click",function (){
            span.parentElement.remove();
            event.stopPropagation();
        });
    }
}

ul.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
},false
);

var saveBtn = document.querySelector('.save');
var clearBtn = document.querySelector('.clear');

saveBtn.addEventListener('click',function() {
    localStorage.setItem("todoList" , ul.innerHTML );
});

clearBtn.addEventListener('click',function(){
    ul.innerHTML= "";
    localStorage.removeItem('todoList',ul.innerHTML );
});

function loadTodo(){
    if(localStorage.getItem('todoList')){
        ul.innerHTML = localStorage.getItem('todoList');
    }
}