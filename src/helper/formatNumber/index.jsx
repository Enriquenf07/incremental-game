export function formatNumber(n, i=0) {
    if (n >= 1000000000){
        return `${(n / 1000000000).toFixed(2)}T`
    }  
    if (n >= 1000000){
        return `${(n / 1000000).toFixed(2)}M`
    }
    if (n >= 1000){
        return `${(n / 1000).toFixed(2)}K`
    }
    return i == 1 ? n.toFixed(2) : n.toFixed()
}