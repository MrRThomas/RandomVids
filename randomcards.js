<script type="text/javascript">

var card01 = "<iframe width='352' height='198' src='https://www.youtube.com/embed/8wLwxmjrZj8' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><BR>";

var card02 = "<iframe width='352' height='198' src='https://www.youtube.com/embed/62usa4E8Ucw' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br>";

var card03 = "<iframe width='352' height='198' src='https://www.youtube.com/embed/-8p_GQUNXbs' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br>";

var card04 = "<iframe width='352' height='198' src='https://www.youtube.com/embed/m86mBRKZHY0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br>" ;

var randomNumber = Math.floor(Math.random() * 4 ) + 1;
if (randomNumber === 1) {
  document.write(card01);
} else if (randomNumber === 2) {
  document.write(card02);
} else if (randomNumber === 3) {
  document.write(card03);
} else {
  document.write(card04);
}

</script>
