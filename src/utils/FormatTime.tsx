export default function formatTime(time) {
  let [h24, m, s] = time;
  const hh = ((h24 + 11) % 12) + 1;
  if (m < 10) {
    m = `0${m}`;
  }
  if (s < 10) {
    s = `0${s}`;
  }
  if (h24 > 12) return `${hh}:${m}:${s}:PM`;
  return `${hh}:${m}:${s} AM`;
}
