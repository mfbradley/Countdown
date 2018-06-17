$(document).ready(function() {

    function updateTime() {
        var a = moment(new Date());
        var b = moment('2018, 06, 21').toObject();
        var duration = moment.duration(-a.diff(b))

        console.log(duration)

        var days = duration._data.days;
        var hours = duration._data.hours;
        var minutes = duration._data.minutes;
        var seconds = duration._data.seconds;
        var milliseconds = duration._data.milliseconds;

        var msConverted = moment(milliseconds).format('SS')
        var html = days + ' d ' + hours + ' h ' + minutes + ' m ' + seconds + ' s ' + msConverted + ' ms'

        $("#time").text(html);
        // $("#milliseconds").text(ms);
    }

    setInterval(function () {
        updateTime();
    }, 10);

    updateTime();

    $(".btn").click(function () {
        alert("clicked!");
    })

});