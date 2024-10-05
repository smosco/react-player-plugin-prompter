// scss 적용을 위한 타입 선언
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

// svg 사용을 위한 타입 선언
declare module '*.svg' {
  const content: string;
  export default content;
}
