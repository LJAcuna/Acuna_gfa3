function report(){
	var n1 = Math.ceil(Math.random()*20);
	var n2 = Math.ceil(Math.random()*20);
	var n3 = Math.ceil(Math.random()*20);
	var alpt="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    document.getElementById("n1").innerHTML = n1;
	document.getElementById("n2").innerHTML = n2;
	document.getElementById("n3").innerHTML = n3;

	if(Math.max(n1,n2,n3)==n1&&n1!=n2&&n1!=n3){
		document.getElementById("large").innerHTML="present ("+n1+")";
	}
	else if(Math.max(n1,n2,n3)==n2&&n2!=n1&&n2!=n3){
		document.getElementById("large").innerHTML="late ("+n2+")";
	}
	else if(Math.max(n1,n2,n3)==n3&&n3!=n1&&n3!=n2){
		document.getElementById("large").innerHTML="absent ("+n3+")";
	}
	
	if (n1>0){
		var daylt = alpt[n1];
		document.getElementById("ltr").innerHTML = daylt;
	}
	
	var mins = n2*n3;
	var hrs = parseInt((n2*n3)/60);
	var actmins = (mins)%60;
	document.getElementById("time").innerHTML= hrs +"hr "+ actmins +"min";
}
