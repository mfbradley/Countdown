function updateTime() {
    var a = moment(new Date());
    var b = moment('2018, 06, 21').toObject();
    var duration = moment.duration(-a.diff(b))

    var days = duration._data.days;
    var hours = duration._data.hours;
    var minutes = duration._data.minutes;
    var seconds = duration._data.seconds;
    var milliseconds = duration._data.milliseconds;

    var msConverted = moment(milliseconds).format('SS')
    var html = days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds ' + msConverted + ' milliseconds '

    $("#time").text(html);
}

setInterval(function () {
    updateTime();
}, 10);

updateTime();
