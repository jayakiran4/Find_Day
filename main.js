  var tabs = document.querySelector('paper-tabs');
  var list = document.querySelector('post-list');

  tabs.addEventListener('core-select', function() {
    list.show = tabs.selected;
  });
var scope = document.querySelector('template[is=auto-binding]');
var text;
  scope.toggleDialog1 = function(e) {
    if (e.target.localName != 'paper-fab') {
      return;
    }
    var d = e.target.nextElementSibling;
    if (!d) {
      return;
    }
    d.toggle();
  }

  scope.transitions = [
    'core-transition-center',
    'core-transition-top',
    'core-transition-bottom',
    'core-transition-left',
    'core-transition-right'
  ];

  scope.toggleDialog2 = function(e) {
    if (e.target.localName != 'paper-fab') {
      return;
    }
    scope.transition = e.target.getAttribute('transition');
    document.getElementById('dialog2').toggle();
  }

function myDay()
{
      var d=document.getElementById("dd").value;
      if(d==""||isNaN(d))
	{
	text= "Invalid Date, Not Numeric !";
	document.getElementById("day").innerHTML = "The date you entered is <p style='color:#FF5252'>"+text+"</p>";
	return;
	}
else if(d<=0)
	{
	text= "Does not exist !";
	document.getElementById("day").innerHTML = "The date you entered <p style='color:#FF5252'>"+text+"</p>";
	return;
	}
var m=document.getElementById("mm").value;
if(m==""||isNaN(m))
	{
	text= "Invalid Month, Not Numeric !";
	document.getElementById("day").innerHTML = "The month you entered is <p style='color:#FF5252'>"+text+"</p>";
	return;
	}
else if(m>12||m<=0)
	{
	text= "Does not exist !";
	document.getElementById("day").innerHTML = "The month you entered <p style='color:#FF5252'>"+text+"</p>";
	return;
	}
var y=document.getElementById("yy").value;
if(y==""||isNaN(y))
	{
	text= "Invalid Year, Not Numeric !";
	document.getElementById("day").innerHTML = "The year you entered is <p style='color:#FF5252'>"+text+"</p>";
	return;
	}
else if(y<=0)
	{
	text= "Does not exist !";
	document.getElementById("day").innerHTML = "The year you entered <p style='color:#FF5252'>"+text+"</p>";
	return;
	}
else if(m==1)
	{
		if(d>31)
			{
			document.getElementById("day").innerHTML = "<p style='color:#FF5252'>"+"January month cannot have more than 31 days"+"</p>";
			return;
			}
	}
else if(m==3)
	{
		if(d>31)
			{
			document.getElementById("day").innerHTML = "<p style='color:#FF5252'>"+"March month cannot have more than 31 days"+"</p>";
			return;
			}
	}
else if(m==4)
	{
		if(d>30)
			{
			document.getElementById("day").innerHTML = "<p style='color:#FF5252'>"+"April month cannot have more than 30 days"+"</p>";
			return;
			}
	}
else if(m==5)
	{
		if(d>31)
			{
			document.getElementById("day").innerHTML = "<p style='color:#FF5252'>"+"May month cannot have more than 31 days"+"</p>";
			return;
			}
	}
else if(m==6)
	{
		if(d>30)
			{
			document.getElementById("day").innerHTML = "<p style='color:#FF5252'>"+"June month cannot have more than 30 days"+"</p>";
			return;
			}
	}
else if(m==7)
	{
		if(d>31)
			{
			document.getElementById("day").innerHTML = "<p style='color:#FF5252'>"+"July month cannot have more than 31 days"+"</p>";
			return;
			}
	}
else if(m==8)
	{
		if(d>31)
			{
			document.getElementById("day").innerHTML = "<p style='color:#FF5252'>"+"August month cannot have more than 31 days"+"</p>";
			return;
			}
	}
else if(m==9)
	{
		if(d>30)
			{
			document.getElementById("day").innerHTML = "<p style='color:#FF5252'>"+"September month cannot have more than 30 days"+"</p>";
			return;
			}
	}
else if(m==10)
	{
		if(d>31)
			{
			document.getElementById("day").innerHTML = "<p style='color:#FF5252'>"+"October month cannot have more than 31 days"+"</p>";
			return;
			}
	}
else if(m==11)
	{
		if(d>30)
			{
			document.getElementById("day").innerHTML = "<p style='color:#FF5252'>"+"November month cannot have more than 30 days"+"</p>";
			return;
			}
	}
else if(m==12)
	{
		if(d>31)
			{
			document.getElementById("day").innerHTML = "<p style='color:#FF5252'>"+"December month cannot have more than 31 days"+"</p>";
			return;
			}
	}
else if(m==2)
	{
		if(y%4==0)
			{
				if(d>29)
					{
						document.getElementById("day").innerHTML = "<p style='color:#FF5252'>"+"In a Leap year Februry month cannot have more than 29 days"+"</p>";
						return;
					}
			}
		else if(d>28)
			{
			document.getElementById("day").innerHTML = "<p style='color:#FF5252'>"+"In a Normal Year Februry month cannot have more than 28 days"+"</p>";
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
			text="Sunday";
			}
		else if(x==1)
			{
			text="Monday";
			}
		else if(x==2)
			{
			text="Tuesday";
			}
		else if(x==3)
			{
			text="Wednesday";
			}
		else if(x==4)
			{
			text="Thursday";
			}
		else if(x==5)
			{
			text="Friday";
			}
		else if(x==6)
			{
			text="Saturday";
			}
	document.getElementById("day").innerHTML = "The date you entered is <p style='color:#03A9F4'>"+text+"</p>";

}