import fs from 'fs';
import path from 'path';

const src = path.resolve('src/assets/flowForgelogo.png');
const dest = path.resolve('public/logo.png');

console.log('CWD:', process.cwd());
console.log('Src:', src);
console.log('Dest:', dest);

try {
    if (!fs.existsSync(src)) {
        console.error('ERROR: Source missing!');
        const assets = path.resolve('src/assets');
        console.log('Listing src/assets:', fs.readdirSync(assets));
    } else {
        console.log('Source exists.');
        const stats = fs.statSync(src);
        console.log('Source size:', stats.size);
        
        fs.copyFileSync(src, dest);
        console.log('Copy executed.');
        
        if (fs.existsSync(dest)) {
            console.log('SUCCESS: Dest exists, size:', fs.statSync(dest).size);
        } else {
            console.error('FAILURE: Dest missing after copy.');
        }
    }
} catch (e) {
    console.error('EXCEPTION:', e);
}
