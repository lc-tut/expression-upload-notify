import esbuild from 'esbuild';
import { copyFileSync, mkdirSync } from 'fs';

// distフォルダを作成（存在しない場合）
mkdirSync('./dist', { recursive: true });

// appsscript.jsonをコピー
copyFileSync('./src/appsscript.json', './dist/appsscript.json');

esbuild
    .build({
        entryPoints: ['./src/main.ts'],
        bundle: true,
        minify: true,
        outfile: './dist/main.js',
        format: 'iife',
        globalName: '__bundle__',
        footer: {
            js: 'function onEdit(e){__bundle__.onEdit(e)}',
        },
    })
    .then(() => {
        console.log('✅ Build succeeded!');
    })
    .catch(error => {
        console.log('❌ ビルドに失敗しました');
        console.error(error);
        process.exit(1);
    });
