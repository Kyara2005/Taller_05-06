import { create } from "zustand";


const storeUniverso = create((set)=>({
    
    detalle:{
        nombre: "Centauro A",
        tipo: "Galaxia eliptica",
    },
    
    setGalaxia: (newGalaxia) => set({ detalle: newGalaxia })
    
}))


export default storeUniverso
