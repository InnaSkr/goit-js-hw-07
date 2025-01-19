const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Total categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
    const categoryTitle = item.querySelector('h2').innerText;
    const categoryElements = item.querySelectorAll('li');

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements count: ${categoryElements.length}`);
});