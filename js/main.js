console.log('app is alive');

function switchChannel( channelName){

    console.log('Tuning into channel ' + channelName);

    document.getElementById(channelName).innerHTML= '#Dummy';

    document.getElementById("location1").outerHTML =  '<a id="location1" href="http://w3w.co/upgrading.never.helps" target="_blank"> <strong>upgrading.never.helps</strong></a>';

    $('#star').attr('src','http://ip.lfe.mw.tum.de/sections/star-o.png');
}

function star() {

    $('#star').attr('src','http://ip.lfe.mw.tum.de/sections/star.png');
}

function selectTab( tabID) {

    $("#"+tabID).addClass("selected");
}

function toggleEmojis()
{
    $('#emojis').toggle();
}