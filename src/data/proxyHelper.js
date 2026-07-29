export const getActiveTripKey = () => {
  if (typeof window === 'undefined') return 'rudranath-plan1';
  const segment = window.location.pathname.split('/')[1];
  if (segment === 'rudranath-plan1' || segment === 'rudranath-plan2' || segment === 'plan1' || segment === 'plan2' || segment === 'sikkim' || segment === 'yulla-plan1' || segment === 'yulla-plan2' || segment === 'hemkund' || segment === 'ladakh-plan1' || segment === 'ladakh-plan2' || segment === 'spiti-plan1' || segment === 'spiti-plan2' || segment === 'annapurna-plan1' || segment === 'shrikhand-plan1' || segment === 'shrikhand-plan2') {
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
  if (key === 'shrikhand-plan1' || key === 'shrikhand-plan2') return 'shrikhand-mahadev';
  return key;
};

export const getIsTripMainPage = () => {
  if (typeof window === 'undefined') return true;
  const path = window.location.pathname;
  return !path.includes('stay') && !path.includes('expenses') && !path.includes('resources');
};

export const isPlan2 = typeof window !== 'undefined' && (window.location.pathname.includes('plan2') || window.location.pathname.includes('yulla-plan2') || window.location.pathname.includes('ladakh-plan2') || window.location.pathname.includes('spiti-plan2') || window.location.pathname.includes('shrikhand-plan2'));

export const createDynamicProxy = (getPlan1, getPlan2, getSikkim, getYulla1, getYulla2, getHemkund, getLadakh1, getLadakh2, getSpiti1, getSpiti2, getAnnapurna1, getShrikhand1, getShrikhand2, isArray = false) => {
  const target = isArray ? [] : {};
  const getActiveData = () => {
    const key = getActiveTripKey();
    if (key === "rudranath-plan2" || key === "plan2") return typeof getPlan2 === "function" ? getPlan2() : getPlan1();
    if (key === "sikkim") return typeof getSikkim === "function" ? getSikkim() : getPlan1();
    if (key === "hemkund") return typeof getHemkund === "function" ? getHemkund() : getPlan1();
    if (key === "ladakh-plan1") return typeof getLadakh1 === "function" ? getLadakh1() : getPlan1();
    if (key === "ladakh-plan2") return typeof getLadakh2 === "function" ? getLadakh2() : getPlan1();
    if (key === "spiti-plan1") return typeof getSpiti1 === "function" ? getSpiti1() : getPlan1();
    if (key === "spiti-plan2") return typeof getSpiti2 === "function" ? getSpiti2() : getPlan2();
    if (key === "annapurna-plan1") return typeof getAnnapurna1 === "function" ? getAnnapurna1() : getPlan1();
    if (key === "yulla-plan1") return typeof getYulla2 === "function" ? getYulla2() : getPlan1();
    if (key === "yulla-plan2") return typeof getYulla1 === "function" ? getYulla1() : getPlan1();
    if (key === "shrikhand-plan1") return typeof getShrikhand1 === "function" ? getShrikhand1() : getPlan1();
    if (key === "shrikhand-plan2") return typeof getShrikhand2 === "function" ? getShrikhand2() : typeof getPlan2 === "function" ? getPlan2() : getPlan1();
    return typeof getPlan1 === "function" ? getPlan1() : {};
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
