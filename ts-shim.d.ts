// Typescript Vue 프로젝트에서 .vue 없이 파일을 import 하면 발생하는 이슈 대처법
// https://univdev.page/posts/vue-typescript-without-extension/

declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}
