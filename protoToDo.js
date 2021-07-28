var ipt = document.querySelector(".ipt");
var add = document.querySelector(".add");
var cont = document.querySelector(".cont");
var all = document.querySelector(".all");
var done = document.querySelector(".done");
var removes = document.querySelector(".remove");
var donelist = document.querySelector(".donelist");

//点击添加的功能
add.addEventListener("click",function(){
    var iptVal = ipt.value;//获取文本框的内容
    if (!iptVal) {
        return false;
    }
    var li = document.createElement('li');
    
    li.innerHTML = '<input type="checkbox" ><span class="conte">'+iptVal+'</span><input class="change" type="text" ><span class="remove">删除</span><span class="edit">编辑</span>'
    cont.appendChild(li);
    ipt.value = "";
    all.checked = false;
})
//点击编辑的功能-----将事件委托给父亲
cont.addEventListener("click",function(e){
var target = e.target
//如果点击的是编辑
if(target.className === "edit"){
    var task = target.parentNode.children[1];
    var change =target.parentNode.children[2];
    task.style.display="none"
    // change.style.display= ""+"none";
    change.style.display = "block"
    change.value = task.innerText;
    change.focus();
// console.log(task.style.display);
    change.onblur=function(){
        var task1 = change.value
        task.innerText = task1;
        change.style.display= "none";
        task.style.display="";
    }
}
// 如果点击的是删除
if(target.className === "remove"){
var tasked=target.parentNode
cont.removeChild(tasked)
}
})
//批量处理--------
done.addEventListener("click",function(){
    var takes =document.querySelectorAll(".cont input:checked")
   
    for (var i = 0; i < takes.length; i++) {
        var li = document.createElement('li');
        li.innerText=takes[i].nextSibling.innerText;
        donelist.appendChild(li);
        cont.removeChild(takes[i].parentNode)
    }
})
//批量删除----------
removes.addEventListerer("click",function(){
    var takes =document.querySelectorAll(".cont input:checked");
    for (var i = 0; i < takes.length; i++) {
        cont.removeChild(takes[i].parentNode)
    }
})
//点击全选---------
all.addEventListener("click",function(){
    var check = document.querySelectorAll('.cont input[type="checkbox"]')
    if(all.checked){

    }
})