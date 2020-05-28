function inputForIE() {
    $("#root")
        .html("<input></input>")
    $("input")
        .attr('id', 'preferredHex3')
    $("#preferredHex3").spectrum({
        preferredFormat: "hex3",
        showInput: true,
    });
};

function inputForOtherBrousers() {
    $("#root")
        .html("<input></input>")
    $("input")
        .attr("type", "color")
};

!!window.MSInputMethodContext && !!document.documentMode ? inputForIE() : inputForOtherBrousers();