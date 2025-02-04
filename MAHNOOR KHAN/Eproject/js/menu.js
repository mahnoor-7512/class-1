document.getElementById("downloadbutton").onclick = function (){
    var link= document.createElement("a");
    link.href = "cah.html.doc";
    link.download="Pizza-menu.doc";
    link.onerror=function(){
        alert('download failed:file not found or server error.');
    };
    link.click();
}