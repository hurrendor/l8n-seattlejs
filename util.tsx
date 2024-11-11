import * as fs from 'fs';
import * as path from 'path';

interface Translation {
    [key: string]: string;
}

function copyKeysToLocaleFile(sourceFilePath: string, locale: string): void {
    const sourceData: Translation = JSON.parse(fs.readFileSync(sourceFilePath, 'utf-8'));
    const keys = Object.keys(sourceData);

    const targetDir = path.join(__dirname, `src/locales/${locale}`);
    const targetFilePath = path.join(targetDir, 'translation.json');

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    const targetData: Translation = keys.reduce((acc, key) => {
        acc[key] = '';
        return acc;
    }, {} as Translation);

    fs.writeFileSync(targetFilePath, JSON.stringify(targetData, null, 2), 'utf-8');
}

// Example usage:
// copyKeysToLocaleFile('path/to/source.json', 'en');