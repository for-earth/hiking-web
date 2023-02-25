import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

export default defineConfig({
  build: {
    cssCodeSplit: false,
    /**
     * 번들 사이즈 경량화를 위해 SWC minifier를 사용해요.
     * SWC 옵션을 공식 지원하지 않아 package.json의 resolutions에서 우회적으로 @swc/core를 사용하도록 해두었어요.
     */
    minify: "terser",
  },
  plugins: [
    /**
     * Babel 컴파일러를 사용하는 @vitejs/plugin-react 대신에
     * 속도가 개선된 SWC 컴파일러를 적용한 @vitejs/plugin-react-swc을 사용해요.
     */
    react(),
    checker({
      typescript: true,
    }),
    legacy({
      targets: ["chrome >= 51", "ios_saf >= 13"],
    }),

    /**
     * 권장:
     * Seed Design의 토큰 시스템을 적극적으로 활용하기 위해
     * Atomic CSS 라이브러리를 권장드려요.
     */
    vanillaExtractPlugin({
      esbuildOptions: {
        external: ["@seed-design"],
      },
    }),
  ],
  server: {
    port: 8080,
  },
});
