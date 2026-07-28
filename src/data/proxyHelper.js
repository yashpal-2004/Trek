export const getActiveTripKey = () => {
  if (typeof window === 'undefined') return 'plan1';
  const segment = window.location.pathname.split('/')[1];
  if (segment === 'plan1' || segment === 'plan2' || segment === 'sikkim' || segment === 'yulla-plan1' || segment === 'yulla-plan2' || segment === 'hemkund' || segment === 'ladakh-plan1' || segment === 'ladakh-plan2' || segment === 'spiti-plan1' || segment === 'spiti-plan2') {
    return segment;
  }
  return 'plan1';
};

export const getParentTripId = () => {
  const key = getActiveTripKey();
  if (key === 'plan1' || key === 'plan2') return 'garhwal';
  if (key === 'yulla-plan1' || key === 'yulla-plan2') return 'yulla';
  if (key === 'ladakh-plan1' || key === 'ladakh-plan2') return 'ladakh';
  if (key === 'spiti-plan1' || key === 'spiti-plan2') return 'spiti';
  if (key === 'hemkund') return 'hemkund';
  return key;
};

export const getIsTripMainPage = () => {
  if (typeof window === 'undefined') return true;
  const path = window.location.pathname;
  return !path.includes('stay') && !path.includes('expenses') && !path.includes('resources');
};

export const isPlan2 = typeof window !== 'undefined' && (window.location.pathname.includes('plan2') || window.location.pathname.includes('yulla-plan2') || window.location.pathname.includes('ladakh-plan2') || window.location.pathname.includes('spiti-plan2'));

export const createDynamicProxy = (getPlan1, getPlan2, getSikkim, getYulla1, getYulla2, getHemkund, getLadakh1, getLadakh2, getSpiti1, getSpiti2, isArray = false) => {
  const target = isArray ? [] : {};
  return new Proxy(target, {
    get(t, prop) {
      const key = getActiveTripKey();
      const activeData = 
        key === "plan2" ? getPlan2() : 
        (key === "sikkim" ? getSikkim() : 
        (key === "hemkund" ? getHemkund() :
        (key === "ladakh-plan1" ? getLadakh1() :
        (key === "ladakh-plan2" ? getLadakh2() :
        (key === "spiti-plan1" ? (getSpiti1 ? getSpiti1() : getPlan1()) :
        (key === "spiti-plan2" ? (getSpiti2 ? getSpiti2() : getPlan2()) :
        (key === "yulla-plan1" ? getYulla2() :   // swapped: plan1 route → old plan2 data
        (key === "yulla-plan2" ? getYulla1() :   // swapped: plan2 route → old plan1 data
        getPlan1()))))))));
      
      if (activeData === undefined || activeData === null) {
        return undefined;
      }
      
      const value = activeData[prop];
      if (typeof value === "function") {
        return value.bind(activeData);
      }
      return value;
    },
    // Add ownKeys and getOwnPropertyDescriptor to support Object.keys(), spreads, and loops
    ownKeys(t) {
      const key = getActiveTripKey();
      const activeData = 
        key === "plan2" ? getPlan2() : 
        (key === "sikkim" ? getSikkim() : 
        (key === "hemkund" ? getHemkund() :
        (key === "ladakh-plan1" ? getLadakh1() :
        (key === "ladakh-plan2" ? getLadakh2() :
        (key === "spiti-plan1" ? (getSpiti1 ? getSpiti1() : getPlan1()) :
        (key === "spiti-plan2" ? (getSpiti2 ? getSpiti2() : getPlan2()) :
        (key === "yulla-plan1" ? getYulla2() :   // swapped
        (key === "yulla-plan2" ? getYulla1() :   // swapped
        getPlan1()))))))));
      return Reflect.ownKeys(activeData || {});
    },
    getOwnPropertyDescriptor(t, prop) {
      const key = getActiveTripKey();
      const activeData = 
        key === "plan2" ? getPlan2() : 
        (key === "sikkim" ? getSikkim() : 
        (key === "hemkund" ? getHemkund() :
        (key === "ladakh-plan1" ? getLadakh1() :
        (key === "ladakh-plan2" ? getLadakh2() :
        (key === "spiti-plan1" ? (getSpiti1 ? getSpiti1() : getPlan1()) :
        (key === "spiti-plan2" ? (getSpiti2 ? getSpiti2() : getPlan2()) :
        (key === "yulla-plan1" ? getYulla2() :   // swapped
        (key === "yulla-plan2" ? getYulla1() :   // swapped
        getPlan1()))))))));
      return Reflect.getOwnPropertyDescriptor(activeData || {}, prop);
    }
  });
};
