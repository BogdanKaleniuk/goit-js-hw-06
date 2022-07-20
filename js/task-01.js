const totalCagegories = document.querySelectorAll('.item');
console.log('Number of categories:', totalCagegories.length);

const categoriesArray = [...totalCagegories]
  .map(
    categories =>
      `Category: ${categories.children[0].textContent}, Elements: ${categories.children[1].children.length}`
  )
  .join('\n');

console.log(categoriesArray);
