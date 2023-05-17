export const ipService = {
  getgenerateIPAddresses,
};
async function getgenerateIPAddresses(ipAddress) {
  try {
    const ipArray = ipAddress.split(".");
    const lastByte = parseInt(ipArray[3]);
    if (lastByte > 254) {
      alert("Lütfen geçerli bir IP adresi giriniz.")
    } else {
      const firstIPAddress = `${ipArray[0]}.${ipArray[1]}.${ipArray[2]}.1`;
      const lastIPAddress = `${ipArray[0]}.${ipArray[1]}.${ipArray[2]}.255`;

      const inBetweenIPAddresses = [];
      for (let i = 50; i <= 255; i += 50) {
        if (i !== lastByte) {
          inBetweenIPAddresses.push(
            `${ipArray[0]}.${ipArray[1]}.${ipArray[2]}.${i}`
          );
        }
      }
      return {
        firstIPAddress,
        lastIPAddress,
        inBetweenIPAddresses,
      };
    }
  } catch (error) {
    console.error("Zararlı adresler alınırken bir hata oluştu:", error);
  }
}
