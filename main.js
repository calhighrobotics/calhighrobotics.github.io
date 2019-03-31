function dark() {
    var x = document.getElementById("blog");
    if (x.className === "blog") {
      x.className += " dark";
      console.log("a");
    } else {
      x.className = "blog";

      console.log("b");
    }
  }
  