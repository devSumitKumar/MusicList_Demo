
export const isFilePath = (file : string) => {
  // Local file paths often start with file:// or /data or /storage etc.
  return (
    file.startsWith("file://") ||
    file.startsWith("/") ||
    file.startsWith("content://") // Android content provider
  );
};