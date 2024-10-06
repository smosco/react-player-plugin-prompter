// 시간을 mm:ss 형식으로 변환하는 함수
const formatTime = (time: number | null) => {
  if (time === null) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, '0');
  return `${minutes}:${seconds}`;
};

export default formatTime;
