function myFunction()   
      {
         var x = document.getElementById("myTopnav");
         var y =document.getElementById("heady");
         var z=document.getElementById("bodyy");
         var a=document.getElementById("soc");
         if (x.className == "topnav") 
         {
            x.className += " responsive";
            y.className +=" responsive";
            z.className +=" responsive";
            a.className +=" responsive";
         }
         else 
         {
            x.className = "topnav";
            y.className="first"; 
            z.className="second";
            a.className="social";
        }
      }