export function truncateFilename(str:string) {
    var start = str.substring(0, 10);
    var end = str.replace(/^.*(?=\.[^.]+$)/g, "..");
    return start + end;
  }