const ctx = require.context('./assets/photos', false, /\.(png|jpe?g|webp|svg|gif)$/);

const byFile = {};
const byBase = {};
ctx.keys().forEach((key) => {
  const url = ctx(key);          // итоговый URL после сборки
  const file = key.replace('./', '');
  const base = file.replace(/\.[^.]+$/, '').toLowerCase();
  byFile[file] = url;
  byBase[base] = url;
});

export const getPhotoByFile = (fileName) => byFile[fileName] || null;
export const getPhotoByName = (name) => byBase[String(name).toLowerCase()] || null;