let noOfClicks = 0;

$(".btn").on("click", function (e) {
  if (noOfClicks == 0) {
    $("input").attr("value", "");
    noOfClicks++;
  }

  let id = e.target.id.replace("id", "");
  let text = $("input").attr("value");

  if (id == "backspace") {
    if (text.length > 0 && text[text.length - 1] != " ") {
      text = text.slice(0, text.length - 1);
      $("input").attr("value", text);
    } else if (text.length > 0 && text[text.length - 1] == " ") {
      text = text.slice(0, text.length - 3);
      $("input").attr("value", text);
    } else {
      text = "";
      $("input").attr("value", text);
    }
    return 0;
  }

  switch (id) {
    case "plus":
      id = " + ";
      break;
    case "minus":
      id = " - ";
      break;
    case "times":
      id = " x ";
      break;
    case "dive":
      id = " / ";
      break;
    case "equals":
      id = "";
      break;
  }

  if (text[text.length - 1] == " " && id > 0)
    $("input").attr("value", text + id);
  else if (text[text.length - 1] != " ") $("input").attr("value", text + id);
  else if (text[text.length - 1] == " " && !(id > 0)) {
    text = text.slice(0, text.length - 3);
    $("input").attr("value", text + id);
  }
});

$("#equals").on("click", function (e) {
  let eq = $("input").attr("value");
  $("input").attr("value", calc(eq));
  console.log('eq:', calc(eq))
});

let c = 0;
function calc(str) {
  let arr = str.split(" ");
  str = arr.toString().replaceAll(",", " ");
  console.log(str);
  if (c == 0) console.log(str);
  c++;


  while (arr.indexOf("/") > -1) {
    let i = arr.indexOf("/");
    arr[i - 1] = arr[i - 1] / arr[i + 1];
    arr.splice(i, 2);

    str = arr.toString().replaceAll(",", " ");
    console.log(str);

    calc(str)
  } 
  while (arr.indexOf("x") > -1) {
    let i = arr.indexOf("x");
    arr[i - 1] = arr[i - 1] * arr[i + 1];
    arr.splice(i, 2);

    str = arr.toString().replaceAll(",", " ");
    console.log(str);
    
    calc(str)
  } 
  while (arr.indexOf("+") > -1 || arr.indexOf("-") > -1) {
    for (let i = 1; i < arr.length; ) {
      if (arr[i] == "+") {
        arr[i - 1] = arr[i - 1] * 1 + arr[i + 1] * 1;
      } else if (arr[i] == "-") {
        arr[i - 1] = arr[i - 1] - arr[i + 1];
      } else break;
      arr.splice(i, 2);

      str = arr.toString().replaceAll(",", " ");
      console.log(str);
    } return str
  } 
  return str
}
