$(function () {
  $("#input_20160628 button.draw").click(function () {
                                         var _lines = $.trim($("#input_20160628 textarea").val()).split("\n");
                                         var _repeatable = ($('#input_20160628 [name="repeatable"]').length === 1);
                                         var _number = parseInt($('#input_20160628 [name="number"]').val());
                                         var _result = $("#result_20160628").empty();
                                         if (isNaN(_number)) {
                                         //alert("抽出數量必須為數字");
                                         _result.html("抽出數量必須為數字");
                                         return;
                                         }
                                         if (_lines.length === 1 && _lines[0] === "") {
                                         //alert("抽出數量必須為數字");
                                         _result.html("必須輸入資料");
                                         return;
                                         }
                                         
                                         var _list = [];
                                         for (var _i = 0; _i < _lines.length; _i++) {
                                         var _line = $.trim(_lines[_i]);
                                         if (_repeatable === true) {
                                         _list.push(_line);
                                         }
                                         else if ($.inArray(_line, _list) === -1) {
                                         _list.push(_line);
                                         }
                                         }
                                         
                                         if (_number > _list.length) {
                                         _number = _list.length;
                                         }
                                         
                                         // 抽出n位
                                         var _getRandomInt = function(min, max) {
                                         return Math.floor(Math.random() * (max - min + 1)) + min;
                                         }
                                         
                                         var _result_index = [];
                                         _result.append('<div>今天就吃這間吧！</div>');
                                         for (var _r = 0; _r < _number; _r++) {
                                         var _random_int = _getRandomInt(0, _list.length-1);
                                         if ($.inArray(_random_int, _result_index) === -1) {
                                         _result_index.push(_random_int);
                                         _result.append('<div>'+_list[_random_int] + '</div>');
                                         }
                                         else {
                                         _r--;
                                         }
                                         }
                                         });
  
  $("#input_20160628 button.default").click(function () {
                                            $("#input_20160628 textarea").val('小妞炒飯\n紅蕃茄\n醫餐\n麥當勞\n阿偉火雞肉飯\n億忠刀削麵\n大肥鴨\n日喜蒸蛋飯\n北南山小館');
                                            });
  });
