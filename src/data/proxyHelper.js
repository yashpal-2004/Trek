export const getActiveTripKey = () => {
  if (typeof window === 'undefined') return 'plan1';
  const segment = window.location.pathname.split('/')[1];
  if (segment === 'plan1' || segment === 'plan2' || segment === 'sikkim' || segment === 'yulla-plan1' || segment === 'yulla-plan2') {
    return segment;
  }
  return 'plan1';
};

export const getParentTripId = () => {
  const key = getActiveTripKey();
  if (key === 'plan1' || key === 'plan2') return 'garhwal';
  if (key === 'yulla-plan1' || key === 'yulla-plan2') return 'yulla';
  return key;
};

export const getIsTripMainPage = () => {
  if (typeof window === 'undefined') return true;
  const path = window.location.pathname;
  return !path.includes('stay') && !path.includes('expenses') && !path.includes('resources');
};

export const isPlan2 = typeof window !== 'undefined' && (window.location.pathname.includes('plan2') || window.location.pathname.includes('yulla-plan2'));

export const createDynamicProxy = (getPlan1, getPlan2, getSikkim, getYulla1, getYulla2, isArray = false) => {
  const target = isArray ? [] : {};
  return new Proxy(target, {
    get(t, prop) {
      const key = getActiveTripKey();
      const activeData = 
        key === "plan2" ? getPlan2() : 
        (key === "sikkim" ? getSikkim() : 
        (key === "yulla-plan1" ? getYulla1() : 
        (key === "yulla-plan2" ? getYulla2() : 
        getPlan1())));
      
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
        (key === "yulla-plan1" ? getYulla1() : 
        (key === "yulla-plan2" ? getYulla2() : 
        getPlan1())));
      return Reflect.ownKeys(activeData || {});
    },
    getOwnPropertyDescriptor(t, prop) {
      const key = getActiveTripKey();
      const activeData = 
        key === "plan2" ? getPlan2() : 
        (key === "sikkim" ? getSikkim() : 
        (key === "yulla-plan1" ? getYulla1() : 
        (key === "yulla-plan2" ? getYulla2() : 
        getPlan1())));
      return Reflect.getOwnPropertyDescriptor(activeData || {}, prop);
    }
  });
};
