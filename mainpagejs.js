	var app = angular.module('Sectors', []);
	
	app.controller('getSector', function($scope, $http) {	
			
			var tab,flag;
			this.tab=1;
			this.flag=0;
			
			window.onload=function()
			{
			
				document.getElementById('signup').style.display='none';
				document.getElementById('mypage').style.display='none';
				$http.get('http://localhost:8080/RestDemoService/sectorDisplay')
					.then(function(response) {
        $scope.content = response.data;
        
        $scope.statustext = response.status;
		
        
											});
					
			};
			
			this.mypage=function()
			{
					$http.get('http://localhost:8080/RestDemoService/sectorDisplay')
					.then(function(response) {
        $scope.mypage = response.data;
        
			});
			};
			
				this.select = function(setTab) {
                this.tab = setTab;
				if (this.tab === 1)
				{
				 document.getElementById('signup').style.display='none';
				document.getElementById('mypage').style.display='none';
				}
				else if (this.tab === 2)
				{
					document.getElementById('signup').style.display='none';
					document.getElementById('mypage').style.display='block';
				}
                else if (this.tab === 3)
				{
					document.getElementById('signup').style.display='block';
				    document.getElementById('mypage').style.display='none';	
				}
                else if (this.tab === 4)
				{
					document.getElementById('signup').style.display='none';
				    document.getElementById('mypage').style.display='none';
					mypage();
				}
                else if (this.tab === 5)
				{
					document.getElementById('signup').style.display='none';
				    document.getElementById('mypage').style.display='none';				
					submit(item.name,item.symbol,'http://localhost:8080/RestDemoService/securityDisplay')
				}
                    
               
                
            };
	

	this.submit = function(UIname,UIsymbol,serviceName) {
	var dummy={
	
	
	}
	
	var varname = {name:UIname,symbol:UIsymbol};
    var jsonv = JSON.stringify(varname);
	console.log(jsonv);
		$http.post(serviceName,jsonv,{'Content':'application/json','Accept':'application/json'})
		.then(function(response){			//Anonymus function for success callback
		
			console.log(response.data);		//Prints success log
			        $scope.prediction = response.data;
			
			
		},function(response){				//Anonymus function for error callback
		
			console.log("There was an error: " + response.status + " " + response.statusText);
											//Prints error log
							});
			
		};
		
		
	this.login=function()
	{ var Uname=document.getElementById('uname');
	  var Upswd=document.getElementById('psw');
	  this.submit(Uname,Upswd,'http://localhost:8080/RestDemoService/securityDisplay');
	  this.flag=1;
	
	};
	
	this.signup=function()
	{
		var first_name=document.getElementById('fname');
	  var last_name=document.getElementById('lname');
	  var email_id =document.getElementById('eid');
	  var Password=document.getElementById('passwd');
		var phn_no=document.getElementById('phone');

	  var serviceName='http://localhost:8080/RestDemoService/securityDisplay';
	 	var varname = {first_name:fname,last_name:lname,email_id:eid,Password:passwd,phn_no:phone};
    var jsonv = JSON.stringify(varname);
	console.log(jsonv);
		$http.post(serviceName,jsonv,{'Content':'application/json','Accept':'application/json'})
		.then(function(response){			//Anonymus function for success callback
		
			console.log(response.data);		//Prints success log
			        $scope.prediction = response.data;
			
			
		},function(response){				//Anonymus function for error callback
		
			console.log("There was an error: " + response.status + " " + response.statusText);
											//Prints error log
							});
	
	  this.flag=1;
	};
	
	});