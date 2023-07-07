document.addEventListener("DOMContentLoaded", function () {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;

  // Function to toggle between dark and light mode
  function toggleMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
  }

  // Event listener for the mode toggle checkbox
  var modeToggle = document.getElementById("modeToggle");
  modeToggle.addEventListener("change", function () {
    toggleMode();
  });

  // Function to update the output code
  function updateOutput() {
    code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    code.close();
  }

  // Event listeners for code updates
  html.addEventListener("input", updateOutput);
  css.addEventListener("input", updateOutput);
  js.addEventListener("input", updateOutput);
});
