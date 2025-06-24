export function binarySearch(arr, target) {
  let steps = [];
  let array = [...arr].sort((a, b) => a - b);
  let left = 0, right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    steps.push({ left, right, mid, array });

    if (array[mid] === target) {
      steps.push({ found: true, index: mid });
      break;
    }
    if (array[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  steps.push({ found: false });
  return steps;
}
