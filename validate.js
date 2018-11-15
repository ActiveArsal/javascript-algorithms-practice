// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent



// to be valid, node should satisfy min and max ALONGSIDE with all his children
// first we check if node data satisfying min and max
// then we do recursive check for node left and right children
function validate(node, min = null, max = null) {
  const { left, right, data } = node;
 
  // node is invalid when doesn't satisfy min or max
  if ((max && data > max) || (min && data < min)) return false;
 
  // true by default, since if node doesn't have a child, it should be accepted as valid
  let isLeftChildValid = true;
  let isRightChildValid = true;
 
  if (left) isLeftChildValid = validate(left, min, data);
  if (right) isRightChildValid = validate(right, data, max);
 
  // at this step node validity depends on validity of his children
  // because all check of node data itself was made above (line 8)
  return isLeftChildValid && isRightChildValid;