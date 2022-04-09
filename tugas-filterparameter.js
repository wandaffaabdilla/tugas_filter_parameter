function panggilfilterparameter(value) {
  var arr = [
    { negara: "Indonesia", benua: "Asia" },
    { negara: "Jerman", benua: "Eropa" },
    { negara: "Spanyol", benua: "Eropa" },
    { negara: "Korea", benua: "Asia" },
    { negara: "Portugal", benua: "Eropa" },
    { negara: "Amerika Serikat", benua: "Amerika" },
  ];

  //Eropa
  var benuaEropa = arr.filter(function (item) {
    return item.benua === "Eropa";
  });

  //Asia
  var benuaAsia = arr.filter((item2) => {
    return item2.benua === "Asia";
  });

  //Pemanggilan
  console.log(benuaEropa);
  console.log("=========================================================");
  console.log(benuaAsia);
}
panggilfilterparameter();
