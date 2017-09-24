
$(function() {
    applyMessage();
    function applyMessage() {
        //留言弹窗
        $('.uhead').click(function() {
            $('.liuyan-model').addClass('active');
        })

        //头像名字变化
        var t;
        var flag = 0;

        function timedCount() {
            $('.liuyan-avatar,.liuyan-name').html('');

            for (i = 0; i < 3; i++) {
                var num = Math.round(Math.random() * length);
                var avatarIndex = num % 6 + 1;
                $('.liuyan-dice img').attr('src', 'assets/images/shaizi-' + avatarIndex + '.png');
                if (num == length) { num = num - 1; }
                if (i == 1) {
                    var img = '<img src="assets/images/heros/' + namearry[num] + '.png" data-name="' + namearry[num] + '">';
                    var $img = $(img);
                    $('.liuyan-avatar').append($img);
                }
                var li = '<li>' + namearry[num] + '</li>';
                var $li = $(li);
                $('.liuyan-name').append($li);
            }
            flag++;
            var hz = 20;
            var num = Math.round(Math.random() * hz) + 15;
            if (flag > num) {
                clearInterval(t);
                flag = 0;
                $('.liuyan-dice').click(function() {
                    $('.liuyan-dice').off();
                    t = setInterval(timedCount, 80);
                })
            }
        }

        $('.liuyan-dice').click(function() {
            $('.liuyan-dice').off();
            t = setInterval(timedCount, 80);
        })

        //取消跟确认按钮点击
        $('.cancel').click(function() {
            $('.liuyan-model').removeClass('active');
        })

        $('.confirm').click(function() {
            var avatarSrc = $('.liuyan-avatar img').attr('src');
            var avatarName = $('.liuyan-avatar img').attr('data-name');

            $('.uhead .img').html($('.liuyan-avatar img').clone());
            $('.uhead .name').html(avatarName);
            user.name = avatarName;
            user.avatar = avatarSrc;

            $('.liuyan-model').removeClass('active');
        })
        // 初始化英雄
        var namearry = ['步练师', '蔡夫人', '蔡文姬', '曹操', '曹丕', '曹仁', '曹叡', '曹休', '曹彰', '曹真', '曹植', '岑昏', '陈宫', '陈群', '大乔', '邓艾', '典韦', '貂蝉', '董卓', '伏皇后', '甘宁', '高顺', '公孙渊', '顾雍', '关平', '关兴张苞', '关羽', '郭淮', '郭皇后', '郭嘉', '郭图逢纪', '韩当', '韩浩史涣', '华佗', '黄盖', '黄皓', '黄月英', '黄忠', '简雍', '姜维', '李典', '李儒', '李严', '廖化', '凌统', '刘备', '刘表', '刘禅', '刘封', '刘湛', '鲁肃', '陆逊', '吕布', '吕蒙', '马超', '马谡', '满宠', '孟获', '庞德', '庞统', '全琮', '司马懿', '孙策', '孙登', '孙坚', '孙鲁班', '孙权', '孙尚香', '孙资刘放', '王异', '魏延', '吴懿', '夏侯惇', '夏侯氏', '夏侯渊', '小乔', '徐晃', '徐盛', '徐庶', '许诸', '荀攸', '荀彧', '于吉', '于禁', '虞翻', '袁绍', '张春华', '张飞', '张角', '张辽', '张让', '张松', '张郃', '张嶷', '赵云', '甄姬', '钟会', '钟繇', '周仓', '周瑜', '朱然', '朱治', '诸葛亮', '祝融', '左慈'];
        var length = namearry.length;
        $('.liuyan-name').empty();
        for (i = 0; i < 3; i++) {
            var num = Math.round(Math.random() * length);
            if (num == length) { num = num - 1; }
            if (i == 1) {
                var img = '<img src="assets/images/heros/' + namearry[num] + '.png" data-name="' + namearry[num] + '">';
                $('.liuyan-avatar').html(img);
                $('.uhead .img').html(img);
                $('.uhead .name').html(namearry[num]);
                user.name = namearry[num];
                user.avatar = 'assets/images/heros/' + namearry[num] + '.png';
            }
            var li = '<li>' + namearry[num] + '</li>';
            $('.liuyan-name').append(li);
        }
    }
})