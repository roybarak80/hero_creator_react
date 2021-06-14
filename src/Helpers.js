const Helpers = {
  calcSkills:function(curV, nV, nvI) {
  
  curV[nvI] = nV;
  let outArr = [];
  let diff = 0;
  let ttl = 0;
  let nonz = 0;
 let cValues = curV.reduce((a, b) => a + b)
  if (cValues < 100) { outArr = curV }
  else {
    let newOrder = [...curV]
    newOrder.sort((a, b) => a - b)

    let orderMap = newOrder.reduce((b, a) => {
      let tmp = curV.indexOf(a);
      let ct = 0;
      while (b.indexOf(tmp, ct) !== -1) {
        tmp = curV.indexOf(a, tmp + 1)
        ct++
      }
      b.push(tmp);
      return b
    }, [])

    let uvalueIndex = newOrder.indexOf(curV[nvI]);
    curV = newOrder;
    nvI = uvalueIndex;
    outArr = [];
    diff = cValues - 100; 
    ttl = 0;
    nonz = 0;

    let nvals = curV.reduce((b, a, i) => {
      if (nvI !== i) a = a - Math.floor(a / 100 * diff); // if not the newly added number, find out our relative percentage and subtract it from the original number
      b.push(a);
      ttl += a;
      if (a != 0 && nvI !== i) nonz++;
      return b
    }, []);
    let overage = (ttl % 100),
      ldiff = Math.ceil(overage / nonz) * (ttl > 100 ? -1 : 1); // ldiff determines how to spread the overage/underage so we get to 100
    let numspots = Math.ceil(Math.abs(ldiff) / nonz)
    nvals = nvals.reduce((b, a, i) => {
      if (a !== 0 && nvI !== i && numspots > 0) {
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
