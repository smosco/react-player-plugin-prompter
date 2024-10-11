import esbuild from 'esbuild';
import { execSync } from 'child_process';
import { ScssModulesPlugin } from 'esbuild-scss-modules-plugin';

const isWatchMode = process.argv.includes('--watch');
const isProduction = process.env.NODE_ENV === 'production';

const buildOptions = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/index.js',
  format: 'esm',
  target: ['es2018'],
  external: ['react', 'react-dom'],
  loader: { '.ts': 'ts', '.tsx': 'tsx', '.svg': 'dataurl' },
  sourcemap: !isProduction,
  minify: isProduction,
  tsconfig: 'tsconfig.json',
  logLevel: 'info',
  metafile: true, // 빌드 메타데이터 생성
  plugins: [
    ScssModulesPlugin({
      inject: true, // 스타일을 자동으로 주입할지 여부
      minify: false, // CSS 최소화 여부 TODO(@smosco):cssnano 라이브러리가 필요해 비활성화
    }),
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
      // `context.watch()` 메서드를 사용하여 watch 모드 처리
      await context.watch();
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
