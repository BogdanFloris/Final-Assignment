window.addEventListener("load", doFirst, false);

function doFirst() {
    var button = document.getElementById('save_button');
    button.addEventListener("click", save, false);
    display();
}

function save(){
    var one = document.getElementById('one').value;
    var two = document.getElementById('two').value;
    /*add various types of checks here*/
    if (one != "" && two != "") {
        sessionStorage.setItem(one,two);
        display();
        document.getElementById('one').value="";
        document.getElementById('two').value="";
    }
}

function remove(item){
    sessionStorage.removeItem(item);
    display();
    document.getElementById('one').value="";
    document.getElementById('two').value="";
}

function removeAll(){
    sessionStorage.clear();
    display();
    document.getElementById('one').value="";
    document.getElementById('two').value="";
}

function display() {
    var rightbox = document.getElementById('rightbox');
    rightbox.innerHTML="";
    if (sessionStorage.length==5) {
        document.getElementById('save_button').style="disabled";
    }
    for (var x=0;x<sessionStorage.length;x++) {
        var a = sessionStorage.key(x);
        var b = sessionStorage.getItem(a);
        /*add sorting here*/
        rightbox.innerHTML += "<img src='sun.png' width = '28px;'/> "+a+" <img src='moon.png' width='28px' onclick=\"remove();\" /> "+b+
		"<input type='button' style='font-size:21px;margin-left:1px;margin-right:20px;margin-bottom:8px;width: 90px;height: 40px; border: transparent;display:inline;' value='Remove' onclick=\"remove('"+a+"');\" /><br />";
    }
}
