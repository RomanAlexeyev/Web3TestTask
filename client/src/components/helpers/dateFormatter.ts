function padTo2Digits(num: number): string {
  return num.toString().padStart(2, "0");
}

function formatDate(date: Date): string {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join(".");
}

export default function dateFormatter (secs: number): string {
    const date = new Date(secs * 1000);
    date.setHours(0, 0, 0, 0);
    return formatDate(date);
};