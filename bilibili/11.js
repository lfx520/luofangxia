//window.onload=
function submit()
{
	if (document.form1.myname.value!="罗方霞")//条件1
    
	    
	    	alert("该用户名不存在");//当条件1 为ture时执行
	    
	        window.location.href="file:///F:/dend.html";

	    if (document.form2.mypassword.value!="2015210946")//条件2

	        alert("密码错误")//当条件2 为ture时执行 
	   
	   else
	    	window.location.href="http://live.bilibili.com/";//当条件1 和条件2 都不为ture时执行
	    
}