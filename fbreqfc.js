//a = element to get group ID (ex.: property='al:android:url'), b = attribute that contains the group ID (content), c = group feed option (RECENT_ACTIVITY / CHRONOLOGICAL), d = facebook base URL
function sortGrp(a, b, c, d){
  a = a[0].getAttribute(b);
  var x = a.split("/");
  return d + "groups/" + x[3] + "/?sorting_setting=" + c.toUpperCase();
}

// a = URL to split, b = split by
function splitURL(a, b){
  a = a.split(b);
  return a;
}

function groupSec(a, b){
  var c = a.toString().replace(/(.?)ref=bookmarks/gi, "");
  return c + "?sorting_setting=" + b.toUpperCase();
}
