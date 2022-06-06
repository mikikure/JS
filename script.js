//星の出力問1//
for (var i=1;i<6;i++){
    document.write("★");
}

document.write("<br>");
document.write("<br>");

//問2//
for(var a=1;a<3;a++){
    for(var b=1;b<4;b++){
        document.write("★");
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");

//問3//
for(var c=1;c<5;c++){
    for(var d=1;d<6;d++){
        document.write("★");
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");

//問4//
for(var e=1;e<4;e++){
    for(var f=1;f<4;f++){
        if(f%2==0){
            document.write("☆");
        }else{document.write("★");}
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");

//問5//
for(var g=1;g<5;g++){
    for(var h=1;h<6;h++){
        if(h%2==0){
            document.write("☆");
        }else{
            document.write("★");
        }
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");

//問6//
for(var j=1;j<=5;j++){
    for(var k=1;k<=j;k++){
        document.write("★");
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");

//関数問1//
function menseki(hankei,enshu=3.14){
    return(hankei*hankei*enshu);
}
document.write(menseki(5)+"<br>");
document.write(menseki(7)+"<br>");
document.write(menseki(10)+"<br>");

document.write("<br>");
document.write("<br>");

//問2//
function ticket(group,adult,child){
    return group+"グループの合計金額は"+(adult*500+child*200)+"円です。";
}
document.write(ticket("A",2,4)+"<br>");
document.write(ticket("B",1,5)+"<br>");
document.write(ticket("C",3,7)+"<br>");

document.write("<br>");
document.write("<br>");


document.write("問1");
document.write("<br>");
for(var n=1;n<=25;n++){
    if(n%2==0){
        document.write("☆");
    }else{
        document.write("★");
    }
    if(n%5==0){
        document.write("<br>");}
}

document.write("<br>");
document.write("<br>");

document.write("問2");
document.write("<br>");
for(var m=1;m<=5;m++){
    for(var o=1;o<=5;o+=1){
        if(o==m){
            document.write("☆");
        }else{
            document.write("★");
        }
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");

document.write("問3");
document.write("<br>");
for(var p=1;p<=5;p++){
    for(var q=1;q<p;q++){
        document.write("★");
    }
    document.write("☆");
    document.write("<br>")
}
