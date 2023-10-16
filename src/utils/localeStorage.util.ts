export class storeLocalUtil {
  static get(key: string) {
    return JSON.parse(localStorage.getItem(key)!);
  }

  static set(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
