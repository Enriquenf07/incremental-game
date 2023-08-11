export function formatNumber(n) {
    if (n >= 1000){
        return `${(n / 1000).toFixed(2)}K`
    }
    if (n >= 1000000){
        return `${(n / 1000000).toFixed(2)}M`
    }
    if (n >= 1000000000){
        return `${(n / 1000000000).toFixed(2)}T`
    }
    return n.toFixed()
}