document.write("<b>Using While Loops </b>");
		var a = 0, b = 1, c;
		document.write("<br> This while loop will list the fibonacci sequence below <b>25</b><br>");
		while(a<25)
		{
			document.write(a + "<br />");
			c = a + b;
			a = b;
			b = c;
		}