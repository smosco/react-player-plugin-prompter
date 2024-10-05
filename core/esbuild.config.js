// eslint-disable-next-line @typescript-eslint/no-require-imports
const esbuild = require('esbuild');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { execSync } = require('child_process');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { sassPlugin } = require('esbuild-sass-plugin');

const isWatchMode = process.argv.includes('--watch');
const isProduction = process.env.NODE_ENV === 'production';

const buildOptions = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  outdir: 'dist',
  format: 'esm',
  target: ['es2018'],
  external: ['react', 'react-dom'],
  loader: { '.ts': 'ts', '.tsx': 'tsx', '.svg': 'file' },
  sourcemap: !isProduction,
  minify: isProduction,
  tsconfig: 'tsconfig.json',
  logLevel: 'info',
  metafile: true, // 빌드 메타데이터 생성
  plugins: [
    sassPlugin(), // Sass 플러그인 추가
  ],
};

const buildDts = () => {
  console.log('Generating type declaration files...');
  try {
    execSync('tsc --emitDeclarationOnly --outDir dist', {
      stdio: 'inherit',
    });
    console.log('Type declaration files generated successfully.');
  } catch (error) {
    console.error('Failed to generate type declaration files:', error);
  }
};

const build = async () => {
  try {
    if (isWatchMode) {
      const context = await esbuild.context(buildOptions);
      await context.watch({
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onRebuild(error, result) {
          if (error) {
            console.error('Watch build failed:', error);
          } else {
            console.log('Watch build succeeded');
            buildDts(); // Watch 모드에서도 타입 선언 파일 생성
          }
        },
      });
      console.log('Watching for changes...');
      buildDts(); // 초기 타입 선언 파일 생성
    } else {
      const result = await esbuild.build(buildOptions);
      console.log('Build complete!');
      if (result.metafile) {
        console.log('Build metadata:', result.metafile);
      }
      buildDts();
    }
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
};

build();
