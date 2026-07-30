export const getActiveTripKey = () => {
  if (typeof window === 'undefined') return 'rudranath-plan1';
  const segment = window.location.pathname.split('/')[1];
  if (segment === 'rudranath-plan1' || segment === 'rudranath-plan2' || segment === 'plan1' || segment === 'plan2' || segment === 'sikkim' || segment === 'yulla-plan1' || segment === 'yulla-plan2' || segment === 'hemkund' || segment === 'ladakh-plan1' || segment === 'ladakh-plan2' || segment === 'spiti-plan1' || segment === 'spiti-plan2' || segment === 'spiti-plan3' || segment === 'annapurna-plan1' || segment === 'shrikhand-plan1' || segment === 'shrikhand-plan2' || segment === 'hampta-plan1' || segment === 'hampta-plan2') {
    return segment;
  }
  return 'rudranath-plan1';
};

export const getParentTripId = () => {
  const key = getActiveTripKey();
  if (key === 'rudranath-plan1' || key === 'rudranath-plan2' || key === 'plan1' || key === 'plan2') return 'rudranath';
  if (key === 'yulla-plan1' || key === 'yulla-plan2') return 'yulla';
  if (key === 'ladakh-plan1' || key === 'ladakh-plan2') return 'ladakh';
  if (key === 'spiti-plan1' || key === 'spiti-plan2' || key === 'spiti-plan3') return 'spiti';
  if (key === 'annapurna-plan1') return 'annapurna';
  if (key === 'hemkund') return 'hemkund';
  if (key === 'shrikhand-plan1' || key === 'shrikhand-plan2') return 'shrikhand-mahadev';
  if (key === 'hampta-plan1' || key === 'hampta-plan2') return 'hampta-pass';
  return key;
};

export const getIsTripMainPage = () => {
  if (typeof window === 'undefined') return true;
  const path = window.location.pathname;
  return !path.includes('stay') && !path.includes('expenses') && !path.includes('resources');
};

export const isPlan2 = typeof window !== 'undefined' && (window.location.pathname.includes('plan2') || window.location.pathname.includes('yulla-plan2') || window.location.pathname.includes('ladakh-plan2') || window.location.pathname.includes('spiti-plan2') || window.location.pathname.includes('shrikhand-plan2') || window.location.pathname.includes('hampta-plan2'));

export const createDynamicProxy = (...args) => {
  let isArray = false;
  const getters = [...args];
  if (typeof getters[getters.length - 1] === 'boolean') {
    isArray = getters.pop();
  }
  const target = isArray ? [] : {};
  const getActiveData = () => {
    const key = getActiveTripKey();
    if (key === "rudranath-plan2" || key === "plan2") return typeof getters[1] === "function" ? getters[1]() : getters[0]();
    if (key === "sikkim") return typeof getters[2] === "function" ? getters[2]() : getters[0]();
    if (key === "yulla-plan1") return typeof getters[4] === "function" ? getters[4]() : getters[0]();
    if (key === "yulla-plan2") return typeof getters[3] === "function" ? getters[3]() : getters[0]();
    if (key === "hemkund") return typeof getters[5] === "function" ? getters[5]() : getters[0]();
    if (key === "ladakh-plan1") return typeof getters[6] === "function" ? getters[6]() : getters[0]();
    if (key === "ladakh-plan2") return typeof getters[7] === "function" ? getters[7]() : getters[0]();
    if (key === "spiti-plan1") return typeof getters[8] === "function" ? getters[8]() : getters[0]();
    if (key === "spiti-plan2") return typeof getters[9] === "function" ? getters[9]() : getters[1]();
    if (key === "spiti-plan3") return typeof getters[15] === "function" ? getters[15]() : getters[0]();
    if (key === "annapurna-plan1") return typeof getters[10] === "function" ? getters[10]() : getters[0]();
    if (key === "shrikhand-plan1") return typeof getters[11] === "function" ? getters[11]() : getters[0]();
    if (key === "shrikhand-plan2") return typeof getters[12] === "function" ? getters[12]() : typeof getters[1] === "function" ? getters[1]() : getters[0]();
    if (key === "hampta-plan1") return typeof getters[13] === "function" ? getters[13]() : getters[0]();
    if (key === "hampta-plan2") return typeof getters[14] === "function" ? getters[14]() : typeof getters[1] === "function" ? getters[1]() : getters[0]();
    return typeof getters[0] === "function" ? getters[0]() : {};
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
