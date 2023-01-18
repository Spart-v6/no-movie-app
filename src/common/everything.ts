export const convertMinutes = (time: number) => {
    let h = Math.trunc(time / 60);
    let m = time % 60;
    let hDisplay = h > 0 ? h + (h === 1 ? " hour " : " hours ") : "";
    let mDisplay = m > 0 ? m + (m === 1 ? " minute " : " minutes ") : "";
    return hDisplay + mDisplay;
}

export const getDecimalsWithoutRounding = (value: string, numberOfDecimals: number) => {
    const stringValue: string = value?.toString();
    const dotIdx: number = stringValue?.indexOf('.');
    if (dotIdx) {
      return parseFloat(stringValue.slice(0, dotIdx + numberOfDecimals + 1));
    } else {
      return value;
    }
};

export const convertToReadableDate = (val: string) => {
    if(val.length === 0) return;
    var d = new Date(val);
    return d.toLocaleDateString(navigator.languages,{day:"numeric", month:"long", year: "numeric"});
}

export const API_KEY = "4e44d9029b1270a757cddc766a1bcb63";
