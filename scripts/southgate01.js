if (document.images)
{
image01on = new Image(); image01on.src = "images/davidOn.gif";
image01off = new Image(); image01off.src = "images/davidOff.gif";
image02on = new Image(); image02on.src = "images/01homeOn.gif";
image02off = new Image(); image02off.src = "images/01homeStat.gif";
image03on = new Image(); image03on.src = "images/02publishedOn.gif";
image03off = new Image(); image03off.src = "images/02publishedOff.gif";
image04on = new Image(); image04on.src = "images/03servicesOn.gif";
image04off = new Image(); image04off.src = "images/03servicesOff.gif";
image05on = new Image(); image05on.src = "images/04musingsOn.gif";
image05off = new Image(); image05off.src = "images/04musingsOff.gif";
image06on = new Image(); image06on.src = "images/05aboutOn.gif";
image06off = new Image(); image06off.src = "images/05aboutOff.gif";
image07on = new Image(); image07on.src = "images/06feedbackOn.gif";
image07off = new Image(); image07off.src = "images/06feedbackOff.gif";
image08on = new Image(); image08on.src = "images/07contactOn.gif";
image08off = new Image(); image08off.src = "images/07contactOff.gif";
}
function changeImages()
{
if (document.images)
{
for (var i=0; i<changeImages.arguments.length; i+=2)
{
document[changeImages.arguments[i]].src = eval(changeImages.arguments[i+1] + ".src");
}
}
}