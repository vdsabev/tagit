var AdminData=AdminData||{};AdminData.jsUtil={confirm:function(a){window.confirm(a)},buildOptionsFromArray:function(a,b){b.append($("<option />"));for(i in a)$("<option />").text(a[i][0]).attr("value",a[i][1]).appendTo(b);b.attr("disabled",!1)},colorizeRows:function(){$(".colorize tr:odd").addClass("odd"),$(".colorize tr:even").addClass("even")},dateToString:function(a){var b=(a.getMonth()+1).toString(),c=a.getDate().toString();c.length==1&&(c="0"+c);var d=["January","February","March","April","May","June","July","August","September","October","November","December"];return c+"-"+d[b-1]+"-"+a.getFullYear()},randomNumber:function(){var a=1e8,b=1,c=b+Math.random()*(a-b);return Math.round(c)}};