import fs from 'fs';
import path from 'path';

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk('src', (filePath) => {
  if (filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content.replace(/'Cinzel',\s*serif/g, "'Inter', sans-serif")
                            .replace(/'Lora',\s*serif/g, "'Inter', sans-serif");
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log('Updated fonts in:', filePath);
    }
  }
});
