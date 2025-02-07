function solution(sizes) {
  let maxW = 0;
  let maxH = 0;

  sizes.forEach((size) => {
    size.sort((a, b) => a - b);

    const [width, height] = size;
    if (maxW < width) {
      maxW = width;
    }
    if (maxH < height) {
      maxH = height;
    }
  });
  return maxW * maxH;
}
