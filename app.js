import * as styles from "./something.js";

const response = styles.jason.filter((item) => item.style == "VN000D3HY28");

if (response[0]) {
  console.log(response[0].style);
} else {
  console.log(`Item not found`);
}
