console.log('bobbyhadz.com');

const box = document.getElementById('box');

// 👇️ Create another element
const another = document.createElement('div');
another.innerHTML = 'Another content';

// 👇️ Get computed styles of original element
const styles = window.getComputedStyle(box);

let cssText = styles.cssText;

if (!cssText) {
  cssText = Array.from(styles).reduce((str, property) => {
    return `${str}${property}:${styles.getPropertyValue(
      property,
    )};`;
  }, '');
}

// 👇️ Assign CSS styles to the element
another.style.cssText = cssText;

// 👇️ (optionally) add the element to the DOM
document.body.appendChild(another);
