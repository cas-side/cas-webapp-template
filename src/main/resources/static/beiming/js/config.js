var acModule = angular.module("myApp",[]);

//全局变量
acModule.constant("server",{
    // src:configSrc,
});

//请求方式的封装
acModule.factory('requer',function($http,server,$state){
    return {
        ajax:function(url,type,data,callBack){

            return $http({
                url:url,
                method:type,
                data:data,
                headers: {

                }
            }).then(function(res){
                if(res.data&&res.data.code=="0"){
                    callBack(res.data.data);
                }else {
                    if(res){
                        $('#error').text(res.data.msg);
                    }else{
                        $('#error').text("请求失败！");
                    }
                }
            },function(res){
                $('#error').text("请求错误：请检查网络");
                // console.log(res);
            });
        }
    };
});
