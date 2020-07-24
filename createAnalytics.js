function createAnalytics(){
    let counter = 0
    let isDestroyed = false

    const clickCounterListener = () => counter++

    document.addEventListener('click', clickCounterListener)

    return{
        destroy() {
            document.removeEventListener('click', clickCounterListener)
            isDestroyed = true
        },
        getClick() {
            if(isDestroyed) {
                return "Analytics is destroyed"
            }
            return counter
        }
    }
}

window.analytics = createAnalytics()