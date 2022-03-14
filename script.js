




var num = 0;
for (var i=13;i<= 257;i++){
    
    var img = '<img src="img'+i+'.png">';
    if(num % 7 == 0){
        document.write('<br>')
    }
    document.write(img);
    num++;
}