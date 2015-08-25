$(document).ready(function(){
	
	var page_num = 1;//默认在第一页
	
	//ajax跨域
	var localObj = window.location;
	var contextPath = localObj.pathname.split("/")[1];
	var basePath = localObj.protocol+"//"+localObj.host+"/"+contextPath;
	var server_context=basePath;
	//console.log(server_context);
	//分页栏的点击事件
	$(".fenye").find(".paging").click(function(){
		page_num = parseInt($(this).attr("id"));
		getJson(page_num);
	});
	
	//点击上一页分页按钮
	$(".fenye").find(".last_page").click(function(){
		page_num =parseInt(page_num)-1;
		alert(page_num);
		getJson(page_num);
	});
	//点击下一页分页按钮
	$(".fenye").find(".next_page").click(function(){
		page_num =parseInt(page_num)+1;
		//console.log(page_num);
		//alert("pn:"+pn);
		//alert(page_num);
		getJson(page_num);
	});
	
	
	/*
	 * 根据传入的页面，请求第page_num页的内容
	 */
	function getJson(page_){
		//console.log(page_num);
		$.getJSON(
				server_context+	"/GetCusListServlet",
				{pagestart:page_},
				function(json)
				{	//输出数据到控制台
					//console.log(json);
					
					//var obj = eavl(json);
					//转换为对象
					//var json_obj = JSON.parse(json,function(){
					//for(var i =0 ; i<json.length;i++){
					var str = "";
					if (json.length) {
							//补全th
//							str +="<th>操作</th>";
//							str +="<th>First Name</th>";
//							str +="<th>Last Name</th>";
//							str +="<th>Address</th>";
//							str +="<th>Email</th>";
//							str +="<th>Customerid</th>";
//							str +="<th>lastupdate</th>";
							//遍历
							//for(var i=0;i<json.length;i++){
							$.each(json,function(index,array){
								//将数据插入到表格中
								str += '<tr>';
								str += '<td><a>编辑</a>|<a>删除</a></td>';
								str += '<td>'+array.First_Name+'</td>';
								str += '<td>'+array.Last_Name+'</td>';
								str += '<td>'+array.Address+'</td>';
								str += '<td>'+array.Email+'</td>';
								str += '<td>'+array.customer_id+'</td>';
								str += '<td>'+array.LastUpdate+'</td>';
								str += '</tr>';
							});
							//}
							console.log(str);
							$("table").empty();
							$("table").append(str);
						}
					//})
					//}
				}
		);
	}
	
	
	
	
	
	
})


	
