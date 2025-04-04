  
    
    
   /* document.getElementById("submit").onclick = function () {
      ename = document.getElementById("ename").value;
      cIn = document.getElementById("cIn").value;
      cOut = document.getElementById("cOut").value;
    
     // document.getElementById("employees").textContent = ename;
     // document.getElementById("cInDT").textContent = cIn;
     // document.getElementById("cOutDT").textContent = cOut; 

     
    
      records.push(++numOfEmp);
      records.push(ttlhrs);
    
        //console.log(timeIn);
        // console.log(timeOut);
        // console.log(ttlhrs);
      document.getElementById("THW").textContent = ttlhrs; 
      document.getElementById("ttlemp").textContent = numOfEmp;
    
      AddRow();
    }*/
        var numOfEmp = 0;
        var employees = [];
		var inTime = [];
		var outTime = [];
        var ttlhrs = [];
        var date=[];

		var n = 1;
		var x = 0;

		function AddRow(){

			var AddRown = document.getElementById('details');
			var NewRow = AddRown.insertRow(n);

			employees[x] = document.getElementById("ename").value;
			inTime[x] = document.getElementById("cIn").value;
			outTime[x] = document.getElementById("cOut").value;

           
            var a = new Date(inTime[x]);
            var b = new Date(outTime[x]);
            date[x] = a.getDate();

            ttlhrs[x] = b - a;
            ttlhrs[x] = ttlhrs[x] / 36e5;

			var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
            var cel4 = NewRow.insertCell(3);

			cel1.innerHTML = employees[x];
			cel2.innerHTML = inTime[x];
			cel3.innerHTML = outTime[x];
            cel4.innerHTML = ttlhrs[x];
            let sum = 0;


            for (let i = 0; i < ttlhrs.length; i++) {
              sum += ttlhrs[i];
            }

            sum= sum / ttlhrs.length;

            //for (let i = 0; i < date.length; i++){
            //    if(date[x] )
            //}
            latest = Math.max(date);
            console.log(latest);
            numOfEmp += 1;
			n++;
			x++;
            document.getElementById("ttlemp").textContent = numOfEmp;
            document.getElementById("ave").textContent = sum;
		}

     /*    
    var form = document.getElementById("myForm");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
    }
    console.log(ename);
      console.log(cIn);
      console.log(cOut);
      document.getElementById("employees").textContent = hello, ${ename}!;
    */
