// Add a class of "featured" to the first section element on the page.
// const firstSection = document.querySelector('section');
// firstSection.classList.add('featured');

// // Create the new article element
// const newArticle = document.createElement('article');
// newArticle.innerHTML = `
//     <img src="./images/paul-gilmore-unsplash.jpg" alt="Image of a mountain in front of a lake." />
//     <h3>Stop Planning</h3>
//     <p>You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?</p>
//     <aside>
//         <p><strong>Read Time:</strong> 4 Minutes <a href="#">Read more...</a></p>
//     </aside>
// `;

// Add the new article to the end of the section.posts element
const postsSection = document.querySelector('section.posts');
postsSection.appendChild(newArticle);

// Move the first article to become the second article and vice versa
const firstArticle = postsSection.querySelector('article');
const secondArticle = firstArticle.nextElementSibling;
postsSection.insertBefore(secondArticle, firstArticle);

// Remove the "All Posts" link from the header
const headerLink = document.querySelector('header nav a');
headerLink.remove();

// Remove the span element that contains the "Read Time" in the featured post
const featuredArticle = postsSection.querySelector('article.featured');
const readTimeSpan = featuredArticle.querySelector('span');
readTimeSpan.remove();

// Remove the last post from the page, titled "Stop Planning"
const lastArticle = postsSection.lastElementChild;
lastArticle.remove();

// Remove all titles from all non-featured posts
const nonFeaturedArticles = postsSection.querySelectorAll('article:not(.featured) h3');
nonFeaturedArticles.forEach(article => article.remove());


//from Caston's class on Tuesday --- numbers 1 & 2
/// Create elements 
const firstSection = document.querySelector('section');
const articleElement = document.createElement('article');
const imgElement = document.createElement('img');
const hThreeElement = document.createElement('h3');
const pFirst = document.createElement('p');
const pSecond = document.createElement('p');
const asideElement = document.createElement('aside');
const strongElement = document.createElement('strong');
const spanElement = document.createElement('span');
const fourMinText = document.createTextNode("4 Minutes");
const aTagElement = document.createElement('a');
const classPost = document.querySelector('.posts');
const arrayOfElements = [imgElement, hThreeElement, pFirst, asideElement]


/// Modify elements
imgElement.src="./images/paul-gilmore-unsplash.jpg";
imgElement.alt="Image of a mountain in front of a lake.";
aTagElement.href = "#";
hThreeElement.innerText = "Stop Planning";
pFirst.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
strongElement.textContent = "Read Time: ";
aTagElement.innerText = "Read more...";


/// appending child elements
firstSection.classList.add("featured");
arrayOfElements.forEach(x => {
    articleElement.appendChild(x);
})
spanElement.appendChild(strongElement);
spanElement.appendChild(fourMinText);
pSecond.appendChild(spanElement);
pSecond.appendChild(aTagElement);
asideElement.appendChild(pSecond);
articleElement.appendChild(asideElement);
classPost.appendChild(articleElement);