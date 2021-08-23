type Storage = {
    get: <T>(key: string) => T | null,
    remove: (key: string) => boolean,
    set: <T>(key: string, val:T) => boolean,
    clear: () => boolean,
}

export const storage: Storage = {
  get: (key)  => {
    if(!key || !localStorage) return null;
    let val;
    try {
      val = JSON.parse(localStorage.getItem(key));
    }catch(error) {
      val = null;
      throw error;
    };
    return val;
  },
  remove: (key) => {
    if(!key || !localStorage) return false;
    localStorage.removeItem(key);
    return true;
  },
  set: (key, val) => {
    if(!key || !localStorage) return false;
    try {
        localStorage.setItem(key, JSON.stringify(val))
        return true
    }catch(error) {
        return false;
    }
  },
  clear: () => {
    if (!localStorage) return false;
    try{
        localStorage.clear();
        return true;
    }catch(error) {
        return false;
    }
  }
}