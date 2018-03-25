function check()
{
	var t1 = document.getElementById("t1");
	var t2 = document.getElementById("t2");
	var t3 = document.getElementById("t3");
	if(t1.value=="")
	{
		alert("name is empty !!!");
		t1.focus(); 
		return false;
	}
	else 
	{
		if(t2.value=="" || t2.value.match("^[0-9]{10,11}$")==null)
		{
			alert("phone is invalid");
			// t2.focus();
			return false;
		}
		else
			if(t3.value=="")
			{
				alert("address is invalid");
				t3.focus();
				return false;
			}
			else
			{
				var the= document.getElementById("succes");
				the.style.opacity =1 ;
				the.style.visibility ="visible" ;
				return false;
			}
	}
}
function closee(){
	var the= document.getElementById("succes");
	the.style.opacity =0;
	the.style.visibility ="hidden" ;
	location.reload();
}
function openhome(){
	var the2= document.getElementById("a1");
	window.open("about.html")
}