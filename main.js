$(() => {

  $("#selectMenu").change(function (e) {
    e.preventDefault();

    console.log()
    console.log(e.target.value)

    switch ($(this).val()) {
      case "primero":
        window.location.href = "https://google.es";
        break;
      case "segundo":
        window.location.href = "#pFinal";
        break;

      case "tercero":
        window.location.href = "https://elpais.es";
        break;
      default:

        break;
    }

  });
})
