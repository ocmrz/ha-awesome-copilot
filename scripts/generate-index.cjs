const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const categories = ['standards', 'templates', 'prompts', 'reviews', 'architecture'];
const index = {};

categories.forEach(category => {
  index[category] = [];
  const categoryDir = path.join('.', category);

  if (fs.existsSync(categoryDir)) {
    const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.md'));

    files.forEach(filename => {
      const filePath = path.join(categoryDir, filename);
      const content = fs.readFileSync(filePath, 'utf8');
      const parsed = matter(content);
      const data = parsed.data;

      index[category].push({
        title: data.title || filename.replace('.md', ''),
        description: data.description || 'No description provided',
        filename: filename,
        link: `${category}/${filename}`,
        category: category,
        author: data.author || 'Unknown',
        created: data.created || new Date().toISOString().split('T')[0],
        tags: data.tags || []
      });
    });
  }
});

fs.writeFileSync('index.json', JSON.stringify(index, null, 2));
console.log(`Generated index.json with ${Object.values(index).flat().length} total items`);
