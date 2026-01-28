import fs from 'fs';

const src = 'C:\\Users\\HP\\Desktop\\abhinav\\Major_Project_2\\frontend\\vite-project\\src\\assets\\flowForgelogo.png';
const dest = 'C:\\Users\\HP\\Desktop\\abhinav\\Major_Project_2\\frontend\\vite-project\\public\\flowForgelogo.png';

console.log('Starting copy...');
if (!fs.existsSync(src)) {
    console.error('Source does not exist:', src);
    process.exit(1);
}

try {
    fs.copyFileSync(src, dest);
    console.log('Success: Copied to ' + dest);
    if (fs.existsSync(dest)) {
        console.log('Verification: Destination file exists.');
    } else {
        console.error('Verification Failed: Destination file missing.');
    }
} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
