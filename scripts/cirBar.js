window.onload = function onLoad()
{
    $(window).scroll(function()
    {
        if ($(window).scrollTop() > 1000)
        {
            var bar = new RadialProgress(document.getElementById("html_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"HTML", colorText: "#FFFFFF"});
            bar.setText("HTML5");
            bar.setValue(0.55);
            bar.colorFg="#0992B3";
            bar.draw(true); //this forces the bar to be redrawn

            var bar = new RadialProgress(document.getElementById("css_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"CSS", colorText: "#FFFFFF"});
            bar.setIndeterminate(false);
            bar.setValue(0.64);
            bar.colorFg="#0992B3";
            bar.draw(true); //this forces the bar to be redrawn

            var bar = new RadialProgress(document.getElementById("JS_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"JS", colorText: "#FFFFFF"});
            bar.setIndeterminate(false);
            bar.setValue(0.20);
            bar.colorFg="#0992B3";
            bar.draw(true); //this forces the bar to be redrawn

            var bar = new RadialProgress(document.getElementById("C/C++_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"C/C++", colorText: "#FFFFFF"});
            bar.setIndeterminate(false);
            bar.setValue(0.88);
            bar.colorFg="#0992B3";
            bar.draw(true); //this forces the bar to be redrawn

            var bar = new RadialProgress(document.getElementById("Python_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"Python", colorText: "#FFFFFF"});
            bar.setIndeterminate(false);
            bar.setValue(0.8);
            bar.colorFg="#0992B3";
            bar.draw(true); //this forces the bar to be redrawn

            var bar = new RadialProgress(document.getElementById("Git_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"GIT", colorText: "#FFFFFF"});
            bar.setIndeterminate(false);
            bar.setValue(0.5);
            bar.colorFg="#0992B3";
            bar.draw(true); //this forces the bar to be redrawn

            var bar = new RadialProgress(document.getElementById("Linux_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"Linux", colorText: "#FFFFFF"});
            bar.setIndeterminate(false);
            bar.setValue(0.75);
            bar.colorFg="#0992B3";
            bar.draw(true); //this forces the bar to be redrawn

            var bar = new RadialProgress(document.getElementById("3d_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"3D Skills", colorText: "#FFFFFF"});
            bar.setIndeterminate(false);
            bar.setValue(0.7);
            bar.colorFg="#0992B3";
            bar.draw(true); //this forces the bar to be redrawn
        }
        else
        {
            var bar = new RadialProgress(document.getElementById("html_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"HTML"});
            bar.setText("HTML5");
            bar.setValue(0.0);
            bar.colorFg="#0992B3";
            bar.draw(true); //this forces the bar to be redrawn

            var bar = new RadialProgress(document.getElementById("css_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"CSS"});
            bar.setIndeterminate(false);
            bar.setValue(0.0);
            bar.colorFg="#0992B3";
            bar.draw(true); //this forces the bar to be redrawn

            var bar = new RadialProgress(document.getElementById("JS_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"JS"});
            bar.setIndeterminate(false);
            bar.setValue(0.0);
            bar.colorFg="#0992B3";
            bar.draw(true); //this forces the bar to be redrawn

            var bar = new RadialProgress(document.getElementById("C/C++_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"C/C++"});
            bar.setIndeterminate(false);
            bar.setValue(0.0);
            bar.colorFg="#0992B3";
            bar.draw(true); //this forces the bar to be redrawn

            var bar = new RadialProgress(document.getElementById("Python_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"Python"});
            bar.setIndeterminate(false);
            bar.setValue(0.0);
            bar.colorFg="#0992B3";
            bar.draw(true); //this forces the bar to be redrawn

            var bar = new RadialProgress(document.getElementById("Git_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"GIT"});
            bar.setIndeterminate(false);
            bar.setValue(0.0);
            bar.colorFg="#0992B3";
            bar.draw(true); //this forces the bar to be redrawn

            var bar = new RadialProgress(document.getElementById("Linux_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"Linux"});
            bar.setIndeterminate(false);
            bar.setValue(0.0);
            bar.colorFg="#0992B3";
            bar.draw(true); //this forces the bar to be redrawn

            var bar = new RadialProgress(document.getElementById("3d_skill"),
            {progress:0.9, colorFg:"#FFFFFF", thick:5, fixedTextSize:0.15, noPercentage:false, name:"3D Skills"});
            bar.setIndeterminate(false);
            bar.setValue(0.0);
            bar.colorFg="#0992B3";
            bar.draw(true); //this forces the bar to be redrawn
        }
    });
};
