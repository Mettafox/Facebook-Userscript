// # Arguments: a = element where group ID is located, b = atribute where group ID is, c = type of group disposition (CHRONOLOGICAL or RECENT_ACTIVITY), d = Facebook domain, rs = a resource variable #",
function sortGrp(a, b, c, d, rs){
  a = a[0].getAttribute(b);
  rs = a.split('/');
  return d + 'groups/' + rs[3] + '/?sorting_setting=' + c;
}

// # Arguments: a = href attribute, b = type of group disposition (CHRONOLOGICAL or RECENT_ACTIVITY), rs = a resource variable #",
function groupSec(a, b, rs){
  rs = a.toString().replace(/(.?)ref=bookmarks/gi, \"\");
  return rs + \"?sorting_setting=\" + b;
}
