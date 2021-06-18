const Helpers = {
  calcSkills:function(currentValuesArr, newValue, newValueIndex) {
  
    let currentArrValues = currentValuesArr;
    currentArrValues[newValueIndex] = newValue;
    let outArr = [];
    let diff = 0;
    let ttl = 0;
    let nonz = 0;
 let currentTotalOfValues = currentArrValues.reduce((a, b) => a + b)
  if (currentTotalOfValues < 100) { outArr = currentArrValues }
  else {
    let newOrder = [...currentArrValues]
    newOrder.sort((a, b) => a - b)

    let orderMap = newOrder.reduce((b, a) => {
      let nextValueIndex = currentArrValues.indexOf(a);
      let ct = 0;
      while (b.indexOf(nextValueIndex, ct) !== -1) {
        nextValueIndex = currentArrValues.indexOf(a, nextValueIndex + 1)
        ct++
      }
      b.push(nextValueIndex);
      return b
    }, [])

    let uvalueIndex = newOrder.indexOf(currentArrValues[newValueIndex]);
    currentArrValues = newOrder;
    newValueIndex = uvalueIndex;
    outArr = [];
    diff = currentTotalOfValues - 100; 
    ttl = 0;
    nonz = 0;

    let nvals = currentArrValues.reduce((b, a, i) => {
      if (newValueIndex !== i) a = a - Math.floor(a / 100 * diff); // if not the newly added number, find out our relative percentage and subtract it from the original number
      b.push(a);
      ttl += a;
      if (a != 0 && newValueIndex !== i) nonz++;
      return b
    }, []);
    let overage = (ttl % 100),
      ldiff = Math.ceil(overage / nonz) * (ttl > 100 ? -1 : 1); // ldiff determines how to spread the overage/underage so we get to 100
    let numspots = Math.ceil(Math.abs(ldiff) / nonz)
    nvals = nvals.reduce((b, a, i) => {
      if (a !== 0 && newValueIndex !== i && numspots > 0) {
        let fval = a + ldiff
        if (fval < 0) ldiff += Math.abs(fval)
        a += ldiff;
        overage += ldiff
        nonz--;
        if (nonz < 1)  a -= overage
      }
      b.push(a);
      return b;
    }, [])

    orderMap.forEach((o, i) => outArr[o] = nvals[i])
  }
  return outArr
  }
};

export default Helpers;
