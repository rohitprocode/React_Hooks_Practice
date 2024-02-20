export const InitialItems = new Array(30_000_000).fill(0).map((_,i)=>{
    return {
        id : i,
        isSelected : i === 29_000_000   
    }
})
