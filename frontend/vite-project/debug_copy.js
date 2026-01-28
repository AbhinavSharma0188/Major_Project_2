import fs from 'fs';
import path from 'path';

// Define absolute paths to avoid CWD ambiguity
const ROOT = "C:\\Users\\HP\\Desktop\\abhinav\\Major_Project_2\\frontend\\vite-project";
const SRC = path.join(ROOT, "src", "assets", "flowForgelogo.png");
const DEST = path.join(ROOT, "public", "flowForgelogo.png");
const LOG = path.join(ROOT, "copy_log.txt");

function log(msg) {
    console.log(msg);
    fs.appendFileSync(LOG, msg + '\n');
}

try {
    // Clear previous log
    if (fs.existsSync(LOG)) fs.unlinkSync(LOG);
    
    log(`Starting copy procedure...`);
    log(`Source: ${SRC}`);
    log(`Dest: ${DEST}`);

    if (!fs.existsSync(SRC)) {
        log(`ERROR: Source file does not exist!`);
        process.exit(1);
    }

    // Attempt copy
    fs.copyFileSync(SRC, DEST);
    
    // Verify
    if (fs.existsSync(DEST)) {
        const stats = fs.statSync(DEST);
        log(`SUCCESS: File copied. Size: ${stats.size} bytes.`);
    } else {
        log(`FAILURE: File seems to be missing after copy.`);
    }

} catch (e) {
    log(`EXCEPTION: ${e.message}`);
    log(e.stack);
}
