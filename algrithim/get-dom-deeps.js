function getDomDeeps(element) {
  if (!element) return 0;

  let maxDomDeep = 0;

  function travase(node, deep) {
    if (node) {
      maxDomDeep = Math.max(maxDomDeep, deep);
      node.childNodes.forEach(child => {
        travase(child, deep + 1);
      });
    }
  }

  travase(element, 1);

  return maxDomDeep
}

