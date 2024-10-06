// scss 적용을 위한 타입 선언
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
