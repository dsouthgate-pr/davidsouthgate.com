function showMenu( divNum )
{
    if (getIdProperty( "s" + divNum, "display") != "block" )
    {
        setIdProperty("s" + divNum, "display", "block");
        document.images["i" + divNum].src = "images/minus.gif";
    }
    else
    {
        setIdProperty("s" + divNum, "display", "none");
        document.images["i" + divNum].src = "images/plus.gif";
    }
}

setBrowser();