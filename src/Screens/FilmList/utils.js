export const getSectionList = (flatList) => {
  if (Array.isArray(flatList)) {
    return flatList.reduce((accumulator, currentValue) => {
      const acc = Array.isArray(accumulator) ? accumulator : [];

      const accumulatorEntity = acc.find(
        (item) => item.sectName === currentValue.sectionName
      );
      if (accumulatorEntity) {
        accumulatorEntity.filmData.push(currentValue);
      } else {
        acc.push({
          sectName: currentValue.sectionName,
          filmData: [currentValue],
        });
      }
      return acc;
    }, Object.create(null));
  } else {
    return [];
  }
};