//获取用户缓存信息
var userinfo  = $api.getStorage('userinfo');
//检测是否过期
function is_outtime(){
  $.post('http://aipai.lbcity.cn/api/islogin',{'lastsession':userinfo.last_session},function(data){
     if(data==0){
        $api.setStorage('userinfo','');
        api.openFrame({
          name: 'warning',
          url: './html/warning.html',
          bgColor:'rgba(0,0,0,0.0)',
          animation:{
            type:"ripple",
            duration:300
          },
          pageParam: {
              describe: '您的账号在其他地方已登录,请重新登录！'
          }
      });
        setTimeout(function(){
          api.execScript({
            name: 'root',
            script: 'window.location.reload();'
          });
        },500);
     }
  })
}
//判断是否登录
function login_istrue(){
  if(userinfo==undefined || userinfo==''){
    api.openFrame({
      name: 'login',
      url: './html/login.html',
      bgColor:'rgba(0,0,0,0.6)',
      animation:{
        type:"movein",
        subType:"from_bottom",
        duration:0
      }
    });
    return false;
  }else {
    is_outtime();//判断登录前检测是否过期
    return true;
  }
}
//点击按钮触发声音
$(document).on('click','.btn',function(){
  api.startPlay({
      path: 'widget://res/btn.mp3'
  });
    if(!$(this).hasClass('active')){
      //更改图片
      var alt = $(this).children('img').attr('alt');
      var src = $(this).children('img').attr('src');
      if(alt){
        $(this).addClass('active');
        var ssrc = $(this).siblings('.active').children('img').attr('src');
        var salt = $(this).siblings('.active').children('img').attr('alt');
        $(this).siblings('.active').children('img').attr('alt',ssrc);
        $(this).siblings('.active').children('img').attr('src',salt);
        $(this).children('img').attr('alt',src);
        $(this).children('img').attr('src',alt);
        $(this).siblings().removeClass('active');
      }
    }
})
//点击登录
$(".login").on('click',function(){
    api.openFrame({
      name: 'login',
      url: './html/login.html',
      bgColor:'rgba(0,0,0,0.6)',
      animation:{
        type:"movein",
        subType:"from_bottom",
        duration:0
      }
  });
})
//点击注册
$(".create").on('click',function(){
    api.openFrame({
      name: 'create',
      url: './html/create.html',
      bgColor:'rgba(0,0,0,0.6)',
      animation:{
        type:"movein",
        subType:"from_bottom",
        duration:0
      }
  });
})
//设置
$(".seting").on('click',function(){
    var istrue = login_istrue();
    if(istrue){
      api.openFrame({
        name: 'seting',
        url: './html/seting.html',
        bgColor:'rgba(0,0,0,0.6)',
        animation:{
          type:"flip",
          subType:"from_right",
          duration:300
        }
      });
    }
})
//关闭frame窗口
$(".close").on('click',function(){
  api.closeFrame({
    name: api.frameName
  });
})
//关闭win窗口
$(".closeWin").on('click',function(){
  api.closeWin({
      name: api.winName
  });
})
//设置切换
$(".infosetting").on('click',function(){
  $(".login_box_right").children("div").eq($(this).index()).show().siblings("div").hide();
})
//打开个人中心
$(".set_userinfo").on('click',function(){
  var istrue = login_istrue();
  if(istrue){
    api.openWin({
      name: 'userinfo',
      url: './html/userinfo.html',
      bgColor:'rgba(0,0,0,1)',
      animation:{
        type:"push",
        subType:"from_right",
        duration:200
      }
    });
  }
})
//个人中心点编辑
var isclick = true;
$(".edit").on('click',function(){
  var src = $(this).children("img").attr("src");
  var alt = $(this).children("img").attr("alt");
  if(isclick){
    $(this).children("span").text("完成");
    $(this).children("img").attr("src",alt);
    $(this).children("img").attr("alt",src);
    $(".userinfo_input").css("border","1px solid #eaa65a");
    $(".userinfo_input").attr("disabled",false);
    isclick = false;
  }else {
    $(this).children("span").text("编辑");
    $(this).children("img").attr("src",alt);
    $(this).children("img").attr("alt",src);
    $(".userinfo_input").css("border","0");
    $(".userinfo_input").attr("disabled",true);
    isclick = true;
  }
})
//投注记录查询
$(".record").on('click',function(){
  $(this).addClass('record_active').siblings('li').removeClass('record_active');
  $(this).css("background-image","url('../image/game/src_761chess_resource_img_personalcenter_gerenzhonxinjilubg1.png')").siblings("li").css("background-image","url('../image/game/src_761chess_resource_img_personalcenter_gerenzhonxinjilubg2.png')");
})

//推广赚钱
$(".extension").on('click',function(){
  var istrue = login_istrue();
  if(istrue){
    api.openWin({
      name: 'extension',
      url: './html/extension.html',
      bgColor:'rgba(0,0,0,1)',
      animation:{
        type:"push",
        subType:"from_right",
        duration:200
      }
    });
  }
})
//活动
$(".activity").on('click',function(){
  api.openWin({
    name: 'activity',
    url: './html/activity.html',
    bgColor:'rgba(0,0,0,1)',
    animation:{
      type:"push",
      subType:"from_right",
      duration:200
    }
  });
})
//洗码
$(".xima").on('click',function(){
  var istrue = login_istrue();
  if(istrue){
    api.openWin({
      name: 'xima',
      url: './html/xima.html',
      bgColor:'rgba(0,0,0,1)',
      animation:{
        type:"push",
        subType:"from_right",
        duration:200
      }
    });
  }
})
//消息
$(".message").on('click',function(){
  var istrue = login_istrue();
  if(istrue){
    api.openFrame({
      name: 'message',
      url: './html/message.html',
      bgColor:'rgba(0,0,0,0.6)',
      animation:{
        type:"movein",
        subType:"from_bottom",
        duration:0
      }
    });
  }
})
//客服
$(".service").on('click',function(){
  api.openWin({
    name: 'service',
    url: './html/service.html',
    bgColor:'rgba(0,0,0,1)',
    animation:{
      type:"push",
      subType:"from_right",
      duration:200
    }
  });
})
//保险1
$(".inbox").on('click',function(){
  var istrue = login_istrue();
  if(istrue){
    api.openWin({
      name: 'inbox',
      url: './html/inbox.html',
      bgColor:'rgba(0,0,0,1)',
      animation:{
        type:"push",
        subType:"from_right",
        duration:200
      }
    });
  }
})
//提现
$(".cash").on('click',function(){
  var istrue = login_istrue();
  if(istrue){
    api.openWin({
      name: 'cash',
      url: './html/cash.html',
      bgColor:'rgba(0,0,0,1)',
      animation:{
        type:"push",
        subType:"from_right",
        duration:200
      }
    });
  }
})
//充值
$(".recharge").on('click',function(){
  var istrue = login_istrue();
  if(istrue){
    api.openWin({
      name: 'recharge',
      url: './html/recharge.html',
      bgColor:'rgba(0,0,0,1)',
      animation:{
        type:"push",
        subType:"from_right",
        duration:200
      }
    });
  }
})
