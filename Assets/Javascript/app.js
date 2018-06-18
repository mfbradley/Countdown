$(document).ready(function() {

    function updateTime() {
        var a = moment().utc();
        var b = moment('2018-06-21').utc();
        var duration = moment.duration(-a.diff(b));
        
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

    var imagesArray = ['Assets/Images/nic1.jpg', 'Assets/Images/nic2.jpg', 'Assets/Images/nic3.jpg', 'Assets/Images/nic4.jpg', 'Assets/Images/nic5.jpg', 'Assets/Images/nic6.jpg', 'Assets/Images/nic7.jpg', 'Assets/Images/nic8.jpg', 'Assets/Images/nic9.jpg', 'Assets/Images/nic10.jpg', 'Assets/Images/nic11.jpg', 'Assets/Images/nic12.jpg', 'Assets/Images/nic13.jpg', 'Assets/Images/nic14.jpg', 'Assets/Images/nic15.jpg', 'Assets/Images/nic16.jpg', 'Assets/Images/nic17.jpg', 'Assets/Images/nic18.jpg', 'Assets/Images/nic19.jpg', 'Assets/Images/nic20.jpg', 'Assets/Images/nic21.jpg', 'Assets/Images/nic22.jpg', 'Assets/Images/bkg.jpg']

    $('.picsBtn').click(function() {
        var random = Math.floor(Math.random() * imagesArray.length);
        console.log(random);
        $('body').css('background-image', "url('" + imagesArray[random] + "')");
    })


});