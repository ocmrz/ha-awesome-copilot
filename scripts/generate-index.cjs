const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Categories to match awesome-copilot format
const categories = ['instructions', 'prompts', 'chatmodes'];
const index = {
  generated: new Date().toISOString(),
  instructions: [],
  prompts: [],
  chatmodes: []
};

categories.forEach(category => {
  const categoryDir = path.join('.', category);

  if (fs.existsSync(categoryDir)) {
    const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.md'));

    files.forEach(filename => {
      const filePath = path.join(categoryDir, filename);
      const content = fs.readFileSync(filePath, 'utf8');
      const parsed = matter(content);
      const data = parsed.data;

      index[category].push({
        filename: filename,
        title: data.title || filename.replace('.md', ''),
        description: `"${data.description || 'No description provided'}"`,
        link: `${category}/${filename}`
      });
    });
  }
});

fs.writeFileSync('index.json', JSON.stringify(index, null, 2));
console.log(`Generated index.json with ${Object.values(index).filter(Array.isArray).flat().length} total items`);
