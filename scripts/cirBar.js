window.onload = function onLoad()
{
    $(window).scroll(function()
    {
        if ($(window).scrollTop() > 1500)
        {
            var bar = new RadialProgress(document.getElementById("html_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"HTML", colorText: "#FFFFFF"});
            bar.setText("HTML5");
            bar.setValue(0.55);
            bar.colorFg="#FFEB19";
            bar.draw(true); //this forces the bar to be redrawn

            var bar = new RadialProgress(document.getElementById("css_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"HTML", colorText: "#FFFFFF"});
            bar.setIndeterminate(false);
            bar.setValue(0.64);
            bar.colorFg="#FFEB19";
            bar.draw(true); //this forces the bar to be redrawn

            var bar = new RadialProgress(document.getElementById("C/C++_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"HTML", colorText: "#FFFFFF"});
            bar.setIndeterminate(false);
            bar.setValue(0.85);
            bar.colorFg="#FFEB19";
            bar.draw(true); //this forces the bar to be redrawn

            var bar = new RadialProgress(document.getElementById("Python_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"HTML", colorText: "#FFFFFF"});
            bar.setIndeterminate(false);
            bar.setValue(0.8);
            bar.colorFg="#FFEB19";
            bar.draw(true); //this forces the bar to be redrawn
        }
        else
        {
            var bar = new RadialProgress(document.getElementById("html_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"HTML"});
            bar.setText("HTML5");
            bar.setValue(0.0);
            bar.colorFg="#FFEB19";
            bar.draw(true); //this forces the bar to be redrawn

            var bar = new RadialProgress(document.getElementById("css_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"CSS"});
            bar.setText("CSS");
            bar.setIndeterminate(false);
            bar.setValue(0.0);
            bar.colorFg="#FFEB19";
            bar.draw(true); //this forces the bar to be redrawn

            var bar = new RadialProgress(document.getElementById("C/C++_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"C/C++"});
            bar.setText("C/C++");
            bar.setIndeterminate(false);
            bar.setValue(0.0);
            bar.colorFg="#FFEB19";
            bar.draw(true); //this forces the bar to be redrawn

            var bar = new RadialProgress(document.getElementById("Python_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"Python"});
            bar.setText("Python");
            bar.setIndeterminate(false);
            bar.setValue(0.0);
            bar.colorFg="#FFEB19";
            bar.draw(true); //this forces the bar to be redrawn
        }
    });
};
