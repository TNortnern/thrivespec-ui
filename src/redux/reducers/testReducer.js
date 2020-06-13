let count = 0;
export default function (state = count, { type, payload }) {
  switch (type) {
    case "Increment":
      count++;
      break;
    case "Decrement":
      count--;
      break;
  }
  return count;
}

