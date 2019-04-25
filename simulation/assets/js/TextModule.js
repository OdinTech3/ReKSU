var TextModule = function() {
    var tag = "<div class='lead'></div>";
    var text = $(tag)[0];

    // Append text tag to #elements:
    $("#sidebar").append(text);

    this.render = function(data) {
        $(text).html(data);
    };

    this.reset = function() {
        $(text).html("");
    };
};