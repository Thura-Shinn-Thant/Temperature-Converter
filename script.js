document.addEventListener("DOMContentLoaded", function () {
  const iconButton = document.querySelector("#converter-icon");
  const celciusTag = document.querySelector(".cel");

  iconButton.addEventListener("click", () => {
    const celcius = parseFloat(celciusTag.value);
    if (!isNaN(celcius)) {
      let fahrenheit = (celcius * 9) / 5 + 32;
      let fahrenheitTag = document.querySelector("#fahrenheit");
      fahrenheitTag.value = fahrenheit;
      // document.write(
      //   "the convertion from the entered celcuis value to fahrenheit is : " +
      //     fahrenheit
      // );
    } else {
      window.alert("Put Numbers");
    }
  });
});

//this took two days for me to complete the program TF?
