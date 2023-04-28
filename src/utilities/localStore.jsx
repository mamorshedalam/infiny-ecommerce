export function setCart(Obj) {
     let localData = JSON.parse(localStorage.getItem("localData")) || [];
     let dataExists = false;

     for (let i = 0; i < localData.length; i++) {
          if (Obj.SKU === localData[i].SKU) {
               localData[i] = Obj;
               dataExists = true;
          }
     }

     if (!dataExists) {
          localData.push(Obj)
     }

     localStorage.setItem("localData", JSON.stringify(localData))
}