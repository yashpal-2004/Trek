export const getActiveTripKey = () => {
  if (typeof window === 'undefined') return 'rudranath-plan1';
  const segment = window.location.pathname.split('/')[1];
  if (segment === 'rudranath-plan1' || segment === 'rudranath-plan2' || segment === 'plan1' || segment === 'plan2' || segment === 'sikkim' || segment === 'yulla-plan1' || segment === 'yulla-plan2' || segment === 'hemkund' || segment === 'ladakh-plan1' || segment === 'ladakh-plan2' || segment === 'spiti-plan1' || segment === 'spiti-plan2' || segment === 'annapurna-plan1') {
    return segment;
  }
  return 'rudranath-plan1';
};

export const getParentTripId = () => {
  const key = getActiveTripKey();
  if (key === 'rudranath-plan1' || key === 'rudranath-plan2' || key === 'plan1' || key === 'plan2') return 'rudranath';
  if (key === 'yulla-plan1' || key === 'yulla-plan2') return 'yulla';
  if (key === 'ladakh-plan1' || key === 'ladakh-plan2') return 'ladakh';
  if (key === 'spiti-plan1' || key === 'spiti-plan2') return 'spiti';
  if (key === 'annapurna-plan1') return 'annapurna';
  if (key === 'hemkund') return 'hemkund';
  return key;
};

export const getIsTripMainPage = () => {
  if (typeof window === 'undefined') return true;
  const path = window.location.pathname;
  return !path.includes('stay') && !path.includes('expenses') && !path.includes('resources');
};

export const isPlan2 = typeof window !== 'undefined' && (window.location.pathname.includes('plan2') || window.location.pathname.includes('yulla-plan2') || window.location.pathname.includes('ladakh-plan2') || window.location.pathname.includes('spiti-plan2'));

export const createDynamicProxy = (getPlan1, getPlan2, getSikkim, getYulla1, getYulla2, getHemkund, getLadakh1, getLadakh2, getSpiti1, getSpiti2, getAnnapurna1, isArray = false) => {
  const target = isArray ? [] : {};
  const getActiveData = () => {
    const key = getActiveTripKey();
    if (key === "rudranath-plan2" || key === "plan2") return getPlan2();
    if (key === "sikkim") return getSikkim();
    if (key === "hemkund") return getHemkund();
    if (key === "ladakh-plan1") return getLadakh1();
    if (key === "ladakh-plan2") return getLadakh2();
    if (key === "spiti-plan1") return getSpiti1 ? getSpiti1() : getPlan1();
    if (key === "spiti-plan2") return getSpiti2 ? getSpiti2() : getPlan2();
    if (key === "annapurna-plan1") return getAnnapurna1 ? getAnnapurna1() : getPlan1();
    if (key === "yulla-plan1") return getYulla2();
    if (key === "yulla-plan2") return getYulla1();
    return getPlan1();
  };

  return new Proxy(target, {
    get(t, prop) {
      const activeData = getActiveData();
      if (activeData === undefined || activeData === null) {
        return undefined;
      }
      const value = activeData[prop];
      if (typeof value === "function") {
        return value.bind(activeData);
      }
      return value;
    },
    ownKeys(t) {
      return Reflect.ownKeys(getActiveData() || {});
    },
    getOwnPropertyDescriptor(t, prop) {
      return Reflect.getOwnPropertyDescriptor(getActiveData() || {}, prop);
    }
  });
};
