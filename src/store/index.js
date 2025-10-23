import { create } from "zustand";

const useMacBookStore=create((set)=>({
    color:"#2e2c2e",
    setcolor:(color)=>set({color}),

    scale:0.08,
    setscale:(scale)=>set({scale}),

    reset : ()=>set({color:'#2e2c2e' , scale:0.08}),
}))

export default useMacBookStore;