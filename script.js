const facts = [
    "I am 20 years old and have a passion for exploring mountainous regions.",
    "I have visited several mountain ranges and plan to hike many more.",
    "I enjoy capturing the beauty of mountains through photography.",
    "I am learning about the geology and ecosystems of different mountain ranges.",
    "I find peace and inspiration in the solitude of the mountains."
];

document.getElementById('generate-fact').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').textContent = facts[randomIndex];
});
