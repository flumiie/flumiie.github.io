export function hasBTag(html: string) {
  var parser = new DOMParser();

  var node = parser.parseFromString(html, "text/html");
  var allNodes = node.getElementsByTagName("*");

  for (var i = -1, l = allNodes.length; ++i < l; ) {
    if (allNodes[i].nodeName === "B") {
      return true;
    }
  }

  return false;
}
