
var containerEl = document.getElementById('container');



var num = 0;
for (var i=13;i<= 257;i++){
    
    var img = '<img src="img'+i+'.png">';
    
    if (num % 7 == 1){
        containerEl.innerHTML += ('<br>');
    }
    containerEl.innerHTML += (img);
    num++;
    if(num % 7 == 0){
        containerEl.innerHTML += ('<br><br>')
    }
}