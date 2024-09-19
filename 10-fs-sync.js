const { readFileSync, writeFileSync } = require('fs');
console.log('start')
// Read the contents of two files
const first = readFileSync('./content/first.txt', 'utf8');  // Provide 'utf8' encoding for string content
const second = readFileSync('./content/second.txt', 'utf8');

// Write to a new file
try {
    writeFileSync(
        './content/result-sync.txt',                      // Path to the result file
        `Here is the result: ${first}, ${second}`,        // Content to write
        { flag: 'a' }                                    // Use 'a' flag to append, or omit the flag to overwrite
    );
    console.log('Text appended successfully');
    console.log('starting the next one')
} catch (err) {
    console.error('Error writing to file:', err);
}
