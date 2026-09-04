export const getActiveTripKey = () => {
  if (typeof window === 'undefined') return 'rudranath-plan1';
  const segment = window.location.pathname.split('/')[1];
  if (segment === 'rudranath-plan1' || segment === 'rudranath-plan2' || segment === 'plan1' || segment === 'plan2' || segment === 'sikkim' || segment === 'yulla-plan1' || segment === 'yulla-plan2' || segment === 'yulla-plan3' || segment === 'hemkund' || segment === 'ladakh-plan1' || segment === 'ladakh-plan2' || segment === 'ladakh-plan3' || segment === 'ladakh-plan4' || segment === 'spiti-plan1' || segment === 'spiti-plan2' || segment === 'spiti-plan3' || segment === 'annapurna-plan1' || segment === 'shrikhand-plan1' || segment === 'shrikhand-plan2' || segment === 'hampta-plan1' || segment === 'hampta-plan2' || segment === 'madhyamaheshwar-plan1' || segment === 'madhyamaheshwar-plan2' || segment === 'kedarkantha' || segment === 'bir-billing' || segment === 'bir-billing-plan1' || segment === 'bir-billing-plan2' || segment === 'bir-billing-plan3' || segment === 'bir-billing-plan4' || segment === 'jibhi-plan1' || segment === 'jibhi-plan2' || segment === 'ujjain' || segment === 'auli' || segment === 'kashmir' || segment === 'kashmir-plan1' || segment === 'kashmir-plan2' || segment === 'nepal' || segment === 'nepal-plan1' || segment === 'nepal-plan2' || segment === 'varanasi') {
    return segment;
  }
  return 'rudranath-plan1';
};

export const getParentTripId = () => {
  const key = getActiveTripKey();
  if (key === 'rudranath-plan1' || key === 'rudranath-plan2' || key === 'plan1' || key === 'plan2') return 'rudranath';
  if (key === 'yulla-plan1' || key === 'yulla-plan2' || key === 'yulla-plan3') return 'yulla';
  if (key === 'ladakh-plan1' || key === 'ladakh-plan2' || key === 'ladakh-plan3' || key === 'ladakh-plan4') return 'ladakh';
  if (key === 'spiti-plan1' || key === 'spiti-plan2' || key === 'spiti-plan3') return 'spiti';
  if (key === 'annapurna-plan1') return 'annapurna';
  if (key === 'hemkund') return 'hemkund';
  if (key === 'shrikhand-plan1' || key === 'shrikhand-plan2') return 'shrikhand-mahadev';
  if (key === 'hampta-plan1' || key === 'hampta-plan2' || key === 'hampta-pass') return 'hampta-pass';
  if (key === 'madhyamaheshwar-plan1' || key === 'madhyamaheshwar-plan2') return 'madhyamaheshwar';
  if (key === 'kedarkantha') return 'kedarkantha';
  if (key === 'bir-billing' || key === 'bir-billing-plan1' || key === 'bir-billing-plan2' || key === 'bir-billing-plan3' || key === 'bir-billing-plan4') return 'bir-billing';
  if (key === 'jibhi-plan1' || key === 'jibhi-plan2') return 'jibhi';
  if (key === 'kashmir' || key === 'kashmir-plan1' || key === 'kashmir-plan2') return 'kashmir';
  if (key === 'nepal' || key === 'nepal-plan1' || key === 'nepal-plan2') return 'nepal';
  return key;
};

export const getIsTripMainPage = () => {
  if (typeof window === 'undefined') return true;
  const path = window.location.pathname;
  return !path.includes('stay') && !path.includes('expenses') && !path.includes('resources');
};

export const isPlan2 = typeof window !== 'undefined' && (window.location.pathname.includes('plan2') || window.location.pathname.includes('yulla-plan2') || window.location.pathname.includes('ladakh-plan2') || window.location.pathname.includes('spiti-plan2') || window.location.pathname.includes('shrikhand-plan2') || window.location.pathname.includes('hampta-plan2') || window.location.pathname.includes('madhyamaheshwar-plan2') || window.location.pathname.includes('nepal-plan2'));

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
    if (key === "yulla-plan3") return typeof getters[34] === "function" ? getters[34]() : getters[0]();
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
    if (key === "madhyamaheshwar-plan1") return typeof getters[16] === "function" ? getters[16]() : getters[0]();
    if (key === "madhyamaheshwar-plan2") return typeof getters[17] === "function" ? getters[17]() : getters[1]();
    if (key === "kedarkantha") return typeof getters[18] === "function" ? getters[18]() : getters[0]();
    if (key === "bir-billing" || key === "bir-billing-plan1") return typeof getters[19] === "function" ? getters[19]() : getters[0]();
    if (key === "bir-billing-plan2") return typeof getters[20] === "function" ? getters[20]() : getters[1]();
    if (key === "bir-billing-plan3") return typeof getters[21] === "function" ? getters[21]() : getters[2]();
    if (key === "bir-billing-plan4") return typeof getters[22] === "function" ? getters[22]() : getters[3]();
    if (key === "jibhi-plan1") return typeof getters[23] === "function" ? getters[23]() : getters[0]();
    if (key === "jibhi-plan2") return typeof getters[24] === "function" ? getters[24]() : getters[1]();
    if (key === "ujjain") return typeof getters[25] === "function" ? getters[25]() : getters[0]();
    if (key === "auli") return typeof getters[26] === "function" ? getters[26]() : getters[0]();
    if (key === "kashmir" || key === "kashmir-plan1") return typeof getters[27] === "function" ? getters[27]() : getters[0]();
    if (key === "kashmir-plan2") return typeof getters[30] === "function" ? getters[30]() : getters[1]();
    if (key === "ladakh-plan3") return typeof getters[28] === "function" ? getters[28]() : getters[0]();
    if (key === "ladakh-plan4") return typeof getters[29] === "function" ? getters[29]() : getters[0]();
    if (key === "nepal" || key === "nepal-plan1") return typeof getters[31] === "function" ? getters[31]() : getters[0]();
    if (key === "nepal-plan2") return typeof getters[32] === "function" ? getters[32]() : getters[1]();
    if (key === "varanasi") return typeof getters[33] === "function" ? getters[33]() : getters[0]();
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
