const separateObject = (obj) => {
  const res = [];
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    const subKeys = key.split('_');

    res.push({
      date: `${subKeys[1].slice(0, 2)}/${subKeys[1].slice(
        2,
        4
      )}/${subKeys[1].slice(4, 8)}`,
      type: subKeys[3],
      data: obj[key],
      name: obj[key].inputData.paitentName,
    });
  });
  return res;
};

export default separateObject;
