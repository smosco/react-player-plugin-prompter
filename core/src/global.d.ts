// scss 적용을 위한 타입 선언
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// svg 사용을 위한 타입 선언
declare module '*.svg' {
  const content: string;
  export default content;
}
