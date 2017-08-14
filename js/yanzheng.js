/**
 * Created by Administrator on 2017/3/9.
 */

'use strict';

$(function() {

    /*姓名身份证，手机号提交*/
    function isChinaName(name) {
        var pattern = /^[\u4E00-\u9FA5]{1,6}$/;
        return pattern.test(name);
    }


    // 验证身份证
    function isCardNo(card) {
        var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return pattern.test(card);
    }

    // 验证手机号
    function isPhoneNo(phone) {
        var pattern = /^1[34578]\d{9}$/;
        return pattern.test(phone);
    }

    /*用户名判断*/
    function userName(inputid,spanid){
        $(inputid).blur(function(){
            if($.trim($(inputid).val()).length == 0) {
                $(spanid).html("× 名称没有输入");
            } else {
                if(isChinaName($.trim($(inputid).val())) == false) {
                    $(spanid).html("× 名称不合法");
                }
            }
        });
        $(inputid).focus(function(){
            $(spanid).html("");
        });

    };
    userName('#name',"#checkExistname");
    /*身份证判断*/
    function userID(inputid,spanid){
        $(inputid).blur(function(){
            if($.trim($(inputid).val()).length == 0) {
                $(spanid).html("× 身份证号码没有输入");
            } else {
                if(isCardNo($.trim($(inputid).val())) == false) {
                    $(spanid).html("× 身份证号不正确");
                }
            }
        });
        $(inputid).focus(function(){
            $(spanid).html("");
        });
    };
    userID('#identity',"#checkExistID");

    /*手机号判断*/
    function userTel(inputid,spanid){
        $(inputid).blur(function(){
            if($.trim($(inputid).val()).length == 0) {
                $(spanid).html("× 手机号没有输入");
            } else {
                if(isPhoneNo($.trim($(inputid).val())) == false) {
                    $(spanid).html("× 手机号码不正确");
                }
            }
            $(inputid).focus(function(){
                $(spanid).html("");
            });
        });
    };
    userTel('#telephone',"#checkExistPhone");
});
