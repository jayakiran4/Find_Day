<script>
  function myDay()
{
      var d=document.getElementById("dd").value;
      if(d==""||isNaN(d))
	{
	alert("Invalid Date! ,Not Numeric");
	return;
	}
else if(d<=0)
	{
	alert("Date you entered does not exist");
	return;
	}
var m=document.getElementById("mm").value;
if(m==""||isNaN(m))
	{
	alert("Invalid Month! ,Not Numeric");
	return;
	}
else if(m>12||m<=0)
	{
	alert("Month you entered does not exist");
	return;
	}
var y=document.getElementById("yy").value;
if(y==""||isNaN(y))
	{
	alert("Invalid Year! ,Not Numeric");
	return;
	}
else if(y<=0)
	{
	alert("Year you entered does not exist!");
	return;
	}
else if(m==1)
	{
		if(d>31)
			{
			alert("January month cannot have more than 31 days");
			return;
			}
	}
else if(m==3)
	{
		if(d>31)
			{
			alert("March month cannot have more than 31 days");
			return;
			}
	}
else if(m==4)
	{
		if(d>30)
			{
			alert("April month cannot have more than 30 days");
			return;
			}
	}
else if(m==5)
	{
		if(d>31)
			{
			alert("May month cannot have more than 31 days");
			return;
			}
	}
else if(m==6)
	{
		if(d>30)
			{
			alert("June month cannot have more than 30 days");
			return;
			}
	}
else if(m==7)
	{
		if(d>31)
			{
			alert("July month cannot have more than 31 days");
			return;
			}
	}
else if(m==8)
	{
		if(d>31)
			{
			alert("August month cannot have more than 31 days");
			return;
			}
	}
else if(m==9)
	{
		if(d>30)
			{
			alert("September month cannot have more than 30 days");
			return;
			}
	}
else if(m==10)
	{
		if(d>31)
			{
			alert("October month cannot have more than 31 days");
			return;
			}
	}
else if(m==11)
	{
		if(d>30)
			{
			alert("November month cannot have more than 30 days");
			return;
			}
	}
else if(m==12)
	{
		if(d>31)
			{
			alert("December month cannot have more than 31 days");
			return;
			}
	}
else if(m==2)
	{
		if(y%4==0)
			{
				if(d>29)
					{
						alert("In a Leap year Februry month cannot have more than 29 days");
						return;
					}
			}
		else if(d>28)
			{
			alert("In a Normal Year Februry month cannot have more than 28 days");
			return;
			}
	}

	var x=0;
	var p,r,n,l;
	var date=document.getElementById("dd").value;
	var month=document.getElementById("mm").value;
	var year=document.getElementById("yy").value;
		x=x+(date/1);
		month=month-1;
		p=year%4;
		year=year-1;
			if(year>=400)
				{
					year=year%400;
					if(year>=300)
						{
							x=x+1;
							year=year-300;
							r=year/4;
							l=Math.floor(r);
							n=year-l;
							x=x+n+(2*l);
						}
					else if(year>=200)
						{
							x=x+3;
							year=year-200;
							r=year/4;
							l=Math.floor(r);
							n=year-l;
							x=x+n+(2*l);
						}
					else if(year>=100)
						{
							x=x+5;
							year=year-100;
							r=year/4;
							l=Math.floor(r);
							n=year-l;
							x=x+n+(2*l);
						}
					else if(year>=4)
						{
							r=year/4;
							l=Math.floor(r);
							n=year-l;
							x=x+n+(2*l);
						}
					else if(year<4)
						{
							x=x+year;
						}
				}
			else if(year>=300)
				{
					x=x+1;
					year=year-300;
					r=year/4;
					l=Math.floor(r);
					n=year-l;
					x=x+n+(2*l);
				}
			else if(year>=200)
				{
					x=x+3;
					year=year-200;
					r=year/4;
					l=Math.floor(r);
					n=year-l;
					x=x+n+(2*l);
				}
			else if(year>=100)
				{
					x=x+5;
					year=year-100;
					r=year/4;
					l=Math.floor(r);
					n=year-l;
					x=x+n+(2*l);
				}
			else if(year>=4)
				{
					r=year/4;
					l=Math.floor(r);
					n=year-l;
					x=x+n+(2*l);
				}
			else if(year<4)
				{
					x=x+year;
				}
			if(p==0)
				{
					if(month==1)
						{
							x=x+3;
						}
					else if(month==2)
						{
							x=x+4;
						}
					else if(month==3)
						{
							x=x+7;
						}
					else if(month==4)
						{
							x=x+9;
						}
					else if(month==5)
						{
							x=x+12;
						}
					else if(month==6)
						{
							x=x+14;
						}
					else if(month==7)
						{
							x=x+17;
						}
					else if(month==8)
						{
							x=x+20;
						}
					else if(month==9)
						{
							x=x+22;
						}
					else if(month==10)
						{
							x=x+25;
						}
					else if(month==11)
						{
							x=x+27;
						}
				}
			else
				{
					if(month==1)
						{
							x=x+3;
						}
					else if(month==2)
						{
							x=x+3;
						}
					else if(month==3)
						{
							x=x+6;
						}
					else if(month==4)
						{
							x=x+8;
						}
					else if(month==5)
						{
							x=x+11;
						}
					else if(month==6)
						{
							x=x+13;
						}
					else if(month==7)
						{
							x=x+16;
						}
					else if(month==8)
						{
							x=x+19;
						}
					else if(month==9)
						{
							x=x+21;
						}
					else if(month==10)
						{
							x=x+24;
						}
					else if(month==11)
						{
							x=x+26;
						}
				}
		x=x%7;
		if(x==0)
			{
			alert("Sunday");
			return;
			}
		else if(x==1)
			{
			alert("Monday");
			return;
			}
		else if(x==2)
			{
			alert("Tuesday");
			return;
			}
		else if(x==3)
			{
			alert("Wednesday");
			return;
			}
		else if(x==4)
			{
			alert("Thursday");
			return;
			}
		else if(x==5)
			{
			alert("Friday");
			return;
			}
		else if(x==6)
			{
			alert("Saturday");
			return;
			}

}
</script>
