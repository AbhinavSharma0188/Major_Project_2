import fs from 'fs';

const src = 'C:\\Users\\HP\\Desktop\\abhinav\\Major_Project_2\\frontend\\vite-project\\src\\assets\\flowForgelogo.png';
const dest = 'C:\\Users\\HP\\Desktop\\abhinav\\Major_Project_2\\frontend\\vite-project\\public\\flowForgelogo.png';

try {
    fs.copyFileSync(src, dest);
    console.log('File copied successfully to ' + dest);
} catch (err) {
    console.error('Error copying file:', err);
}
