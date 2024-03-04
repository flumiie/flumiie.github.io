function disableBrowserKeys()
{
    var message="Sorry, right-click has been disabled"; 
    /////////////////////////////////// 

    document.onkeydown = function(e)
    {
        if ( e.keyCode == 123 ||
            e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0) ||
            e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0) ||
            e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0) ||
            e.ctrlKey && e.keyCode == 'U'.charCodeAt(0) )
        {
            if( document.getElementById('context-menu-blocker-container').style.display === 'block' )
            {
                document.getElementById('context-menu-blocker-container').style.animation = 'hide-blocker 0.5s ease forwards';
                setTimeout(function(){ document.getElementById('context-menu-blocker-container').style.display = 'none'; }, 500);
            }
            document.getElementById('blocker-container').style.display = 'block';
            document.getElementById('blocker-container').style.animation = 'blocker 0.3s ease forwards';
            return false;
        }
        if( e.key === "Escape" )
        {
            document.getElementById('blocker-container').style.animation = 'hide-blocker 0.3s ease forwards';
            setTimeout(function(){ document.getElementById('blocker-container').style.display = 'none'; }, 500);

            document.getElementById('context-menu-blocker-container').style.animation = 'hide-blocker 0.3s ease forwards';
            setTimeout(function(){ document.getElementById('context-menu-blocker-container').style.display = 'none'; }, 500);
        }
    }
    
    function clickIE()
    {
        if( document.all ) return false;
    }
    function clickNS(e)
    {
        if( document.layers || (document.getElementById&&!document.all) )
        { 
            if( e.which == 2||e.which == 3 )
            {
                if( document.getElementById('blocker-container').style.display === 'block' )
                {
                    document.getElementById('blocker-container').style.animation = 'hide-blocker 0.5s ease forwards';
                    setTimeout(function(){ document.getElementById('blocker-container').style.display = 'none'; }, 500);
                }
                document.getElementById('context-menu-blocker-container').style.display = 'block';
                document.getElementById('context-menu-blocker-container').style.animation = 'blocker 0.3s ease forwards';
                return false;
            }
        }
    }
    if( document.layers )
    {
        document.captureEvents(Event.MOUSEDOWN);
        document.onmousedown = clickNS;
    }
    else
    {
        document.onmouseup = clickNS;
        document.oncontextmenu = clickIE;
    }
    document.oncontextmenu = new Function("return false");
}
disableBrowserKeys();

window.addEventListener('DOMContentLoaded', function()
{
    $('#blocker-notice > button').click(function()
    {
        document.getElementById('blocker-container').style.animation = 'hide-blocker 0.5s ease forwards';
        setTimeout(function(){ document.getElementById('blocker-container').style.display = 'none'; }, 500);
    });
    $('#context-menu-blocker-notice > button').click(function()
    {
        document.getElementById('context-menu-blocker-container').style.animation = 'hide-blocker 0.5s ease forwards';
        setTimeout(function(){ document.getElementById('context-menu-blocker-container').style.display = 'none'; }, 500);
    });
});