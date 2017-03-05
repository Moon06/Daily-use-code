/**
 * Created by Moon7 on 16/10/19.
 */
function ajax(opts) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function () {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            var json =JSON.parse(xmlhttp.responseText);
            opts.success(json);
        }
        if(xmlhttp.readyState==4 && xmlhttp.status ==404){
            opts.error();
        }
    }
    var dataStr = '';
    for(var key in opts.data){
        dataStr+= key+ '=' +opts.data[key]+'&';    //拼接 要请求的数据
    }
    dataStr = dataStr.substr(0,dataStr.length-1); //截取字符串

    if(opts.type.toLowerCase()==='post'){         //如果用户用post方式则.......
        xmlhttp.open(opts.type,opts.url,true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send(dataStr);
    }
    if (opts.type.toLowerCase() ==='get'){       //如果用户用get方式则.....
        xmlhttp.open(opts.type,opts.url+'?'+dataStr,true);
        xmlhttp.send()
    }
}

//调用方式....
   document.getElementById("btn").addEventListener('click',function () {

   //    开始调用   ,以下是调用时必须写的参数.
       ajax({
           url: 'ues_ajax.php',
           type:'get',    //用户选择传送数据的方式
           data:{
               username: document.getElementById('input').value    //获取用户要发送的数据
           },
           success:function (data) {
               dealWith(data);    //用数据做事,如拼接dom在页面显示
           },
           error:function () {
               alert("出错了..您呐...")
           }
       })
   })