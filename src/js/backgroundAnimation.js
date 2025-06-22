export function initBackgroundAnimation() {
    const background = document.getElementById('background-pattern')
    let targetX = 0,
        targetY = 0,
        currentX = 0,
        currentY = 0

    document.addEventListener('mousemove', (e) => {
        const { innerWidth, innerHeight } = window
        const scale = 25 // how far the background shifts
        targetX = (e.clientX / innerWidth - 0.5) * scale
        targetY = (e.clientY / innerHeight - 0.5) * scale
    })

    function animate() {
        // Smooth interpolation
        currentX += (targetX - currentX) * 0.1
        currentY += (targetY - currentY) * 0.1
        if (background) {
            background.style.backgroundPosition = `${currentX}px ${currentY}px`
        }
        requestAnimationFrame(animate)
    }

    animate()
}
