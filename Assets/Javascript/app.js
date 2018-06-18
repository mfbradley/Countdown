$(document).ready(function() {

    function updateTime() {
        var a = moment(new Date());
     
        var b = moment('2018, 06, 21').toObject();
        console.log(a)
        console.log(b)
        var duration = moment.duration(-a.diff(b));
        console.log(duration);

        var days = duration._data.days;
        var hours = duration._data.hours;
        var minutes = duration._data.minutes;
        var seconds = duration._data.seconds;
        var milliseconds = duration._data.milliseconds;

        var msConverted = moment(milliseconds).format('SS')
        var html = days + ' d ' + hours + ' h ' + minutes + ' m ' + seconds + ' s ' + msConverted + ' ms'

        $("#time").text(html);
        
    }

    updateTime();

    setInterval(function () {
        updateTime();
    }, 10);

    

    $(".btn").click(function () {
        alert("clicked!");
    })

});