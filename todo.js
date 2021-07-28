(function($){
    var toDoList = {
        init:function(){
            this.cacheElement();// 执行缓存元素的方法
            this.addEvent();// 执行添加事件的方法
        },
        cacheElement:function(){
            this.$ipt = $(".ipt");
            this.$cont = $(".cont");
            this.$all = $(".all");
            this.$done = $(".done")
            this.$removes = $(".removes");
            this.$donelist = $(".donelist")

        },
        addEvent:function(){
            var $this = this;
            $(".add").click(function(){
                //点击增加一条任务
                var inputVal =$this.$ipt.val();// 获取文本框输入的内容
                if(!inputVal){
                    return false;
                }
                var domStr = '<li><input type="checkbox" ><span class="conte">'+inputVal+'</span><input class="change" type="text" ><span class="remove">删除</span><span class="edit">编辑</span></li>'
                $this.$cont.append(domStr);
                $this.$ipt.val('');//清空输入的内容
                $this.$all.prop('checked',false);
            })
            //点击编辑功能
            this.$cont.on("click",".edit",function(){
                var thiscon = $(this).siblings('.conte');
                var thischage = $(this).siblings('.change');
                var task = thiscon.text();//获取当前任务的文本内容
                thiscon.hide();
                thischage.show();
                thischage.val(task).focus();
                //完成编辑
                thischage.blur(function(){
                    var val = $(this).val()//当前输入框的值
                    $(this).hide();
                    $(this).siblings('.conte').text(val).show();
                })
            })
            //删除单个任务
            this.$cont.on("click",".remove",function(){
                $(this).parent().remove();

                $('.cont input[type=checkbox]').each(function (index,dom){
                    if (!$(dom).prop('checked')) {
                        $this.$all.prop('checked',false)
                        return false // 结束each
                    }
                    $this.$all.prop('checked',true)
                })
            })
            //批量处理
            this.$done.click(function(){
                $(".cont input:checked").each(function(index,dom){
                    var content = $(dom).siblings(".conte").text();
                    $this.$donelist.append('<li>'+content+'</li>')
                    $(dom).parent().remove();
                })
                $this.$all.prop("checked",false);
            })
            //批量删除
            this.$removes.click(function(){
                $(".cont input:checked").each(function(index,dom){
                    $(dom).parent().remove();
                })
            })
            //点击全选
            this.$all.click(function(){
                if ($(this).prop("checked")) {
                    $(".cont input").prop("checked",true);
                } else {
                    $(".cont input").prop("checked",false);
                }
            })
            // 勾选单个任务
            this.$cont.on('click','input[type=checkbox]',function (){
                $('.cont input[type=checkbox]').each(function (index,dom){
                    if (!$(dom).prop('checked')) {
                        $this.$all.prop('checked',false)
                        return false // 结束each
                    }
                    $this.$all.prop('checked',true)
                })

            })
        }
    }
toDoList.init()
})(jQuery)