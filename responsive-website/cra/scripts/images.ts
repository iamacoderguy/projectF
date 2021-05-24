import fs from 'fs';
import fsRecursive from 'fs-readdir-recursive';

const imagesPath = 'src/images';

const getUniqueImageFiles = () => {
  const array = fsRecursive(imagesPath)
    .filter((file) => {
      return file.endsWith('.png') || file.endsWith('.svg') || file.endsWith('.jpg');
    })
    .map((file) => {
      return file
        .replace('@2x.png', '.png')
        .replace('@3x.png', '.png');
    });

  return Array.from(new Set(array));
};

const generate = () => {
  const properties = getUniqueImageFiles()
    .map((file) => {
      const name = file
        .substring(0, file.lastIndexOf('.'))
        .replace(/-/g, '_')
        .replace(/\\/g, '_')
        .replace(/ /g, '_');
      const path = file
        .replace(/\\/g, '/');
      return `${name}: require('./${path}').default`;
    })
    .join(',\n  ');

  const string = `const images = {
  ${properties},
};
export default images;
`;

  fs.writeFileSync(imagesPath + '/index.ts', string.replace(/\n/g, '\r\n'), 'utf8');
};

generate();
