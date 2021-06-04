let obj = document.querySelectorAll(".a");
obj.forEach((abc) => {
  abc.addEventListener("click", (event) => {
    document.querySelector(".btn-" + event.target.value).style.backgroundColor =
      "blue";
    document.querySelector(
      ".btn-" +
        (event.target.value.includes("yes")
          ? "no" + event.target.value.split("yes").join("")
          : "yes" + event.target.value.split("no").join(""))
    ).style.backgroundColor = "white";

    const arr = [];
    document.querySelectorAll(".btn-yn").forEach((eachclass) => {
      arr.push(eachclass.style.backgroundColor);
    });
    const submit = arr.filter((bg) => bg === "blue").length;
    console.log(submit);

    if (submit >= 5) {
      document.querySelector(".submit").disabled = false;
    }

    console.log(document.querySelectorAll(".btn-yn"));
  });
});
