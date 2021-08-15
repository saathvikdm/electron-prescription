const separateObject = (obj) => {
  const res = [];
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    let subKeys = key.split('_');
    res.push({
      date: `${subKeys[0].slice(0, 2)}/${subKeys[0].slice(
        2,
        4
      )}/${subKeys[0].slice(4, 8)}`,
      type: subKeys[2],
      data: obj[key],
      name: obj[key].inputData.paitentName,
    });
  });
  return res;
};

export default separateObject;
